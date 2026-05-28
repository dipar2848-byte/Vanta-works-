import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

// ---------------- SUPABASE ----------------
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

// ---------------- RESEND ----------------
const resend = new Resend(process.env.RESEND_API_KEY)

// ---------------- HANDLER ----------------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { lead } = req.body

  if (!lead) {
    return res.status(400).json({ error: "No lead data" })
  }

  try {
    // ---------------- SAVE LEAD ----------------
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
          email_sent: false,
        },
      ])
      .select()
      .single()

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    const leadId = data.id

    // ---------------- EMAIL TO ADMIN ----------------
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

      // mark email sent
      await supabase
        .from("leads")
        .update({
          email_sent: true,
        })
        .eq("id", leadId)

    } catch (err) {
      console.log("Admin email failed:", err.message)
    }

    // ---------------- AUTO REPLY TO USER ----------------
    try {
      await resend.emails.send({
        from: "VantaWorks <onboarding@resend.dev>",
        to: lead.email,
        subject: "We received your request ✔",
        html: `
          <h2>Thanks for contacting VantaWorks 🚀</h2>

          <p>We received your request and will get back to you shortly.</p>
        `,
      })
    } catch (err) {
      console.log("User email failed:", err.message)
    }

    // ---------------- SUCCESS ----------------
    return res.status(200).json({
      success: true,
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message,
    })
  }
}