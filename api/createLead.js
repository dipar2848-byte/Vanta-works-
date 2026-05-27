import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

// -------------------- SERVICES --------------------
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

// -------------------- HANDLER --------------------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { lead } = req.body

  if (!lead) {
    return res.status(400).json({ error: "No lead data" })
  }

  try {
    // -------------------- 1. SAVE TO SUPABASE --------------------
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: lead.name,
          business: lead.business,
          email: lead.email,
          phone: lead.phone,
          message: lead.message,
          stage: "new",
          whatsapp_sent: false,
          email_sent: false,
        },
      ])
      .select()
      .single()

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    const leadId = data.id

    // -------------------- 2. WHATSAPP (META CLOUD API) --------------------
    try {
      await fetch(
        `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: lead.phone,
            type: "text",
            text: {
              body: `Hi ${lead.name}, thanks for contacting us 🚀 We’ve received your request and will get back to you shortly.`,
            },
          }),
        }
      )

      // mark whatsapp sent
      await supabase
        .from("leads")
        .update({ whatsapp_sent: true })
        .eq("id", leadId)

    } catch (err) {
      console.log("WhatsApp error:", err.message)
    }

    // -------------------- 3. EMAIL (RESEND) --------------------
    try {
      // admin email
      await resend.emails.send({
        from: "VantaWorks <onboarding@resend.dev>",
        to: "vantaworkss@gmail.com",
        subject: "🔥 New Lead Received",
        html: `
          <h2>New Lead</h2>
          <p><b>Name:</b> ${lead.name}</p>
          <p><b>Business:</b> ${lead.business}</p>
          <p><b>Email:</b> ${lead.email}</p>
          <p><b>Phone:</b> ${lead.phone}</p>
          <p><b>Message:</b> ${lead.message}</p>
        `,
      })

      // user email
      await resend.emails.send({
        from: "VantaWorks <onboarding@resend.dev>",
        to: lead.email,
        subject: "We received your request ✔",
        html: `<p>Thanks for contacting us 🚀 We’ll get back to you soon.</p>`,
      })

      // mark email sent
      await supabase
        .from("leads")
        .update({ email_sent: true })
        .eq("id", leadId)

    } catch (err) {
      console.log("Email error:", err.message)
    }

    // -------------------- RESPONSE --------------------
    return res.status(200).json({
      success: true,
      leadId,
    })

  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}