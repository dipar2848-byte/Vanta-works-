import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { lead } = req.body

  if (!lead) {
    return res.status(400).json({ error: "No lead data" })
  }

  try {
    // 1. SAVE TO SUPABASE
    const { data, error } = await supabase
      .from("leads")
      .insert([{
        ...lead,
        stage: "followup_sent",
        whatsapp_sent: false,
        email_sent: false,
      }])
      .select()
      .single()

    if (error) {
      return res.status(500).json({ error })
    }

    const leadId = data.id

    // 2. WHATSAPP SEND (INTERAKT / API)
    try {
      await fetch("https://YOUR-WHATSAPP-API-ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY",
        },
        body: JSON.stringify({
          to: lead.phone,
          message: `Hi ${lead.name}, thanks for contacting us 🚀 We’ll get back to you shortly.`,
        }),
      })

      await supabase
        .from("leads")
        .update({ whatsapp_sent: true })
        .eq("id", leadId)

    } catch (err) {
      console.log("WhatsApp error:", err)
    }

    // 3. EMAIL (RESEND)
    try {
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

      await resend.emails.send({
        from: "VantaWorks <onboarding@resend.dev>",
        to: lead.email,
        subject: "We received your request ✔",
        html: `<p>Thanks for contacting us. We’ll get back to you soon.</p>`,
      })

      await supabase
        .from("leads")
        .update({ email_sent: true })
        .eq("id", leadId)

    } catch (err) {
      console.log("Email error:", err)
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}