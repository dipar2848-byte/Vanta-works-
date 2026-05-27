import { Resend } from "resend"

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
    // 1. EMAIL TO YOU (ADMIN)
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
    } catch (err) {
      console.log("Admin email failed:", err)
    }

    // 2. AUTO REPLY TO USER
    try {
      await resend.emails.send({
        from: "VantaWorks <onboarding@resend.dev>",
        to: lead.email,
        subject: "We received your request ✔",
        html: `
          <p>Hi ${lead.name},</p>
          <p>Thanks for contacting VantaWorks 🚀</p>
          <p>We’ll get back to you shortly.</p>
        `,
      })
    } catch (err) {
      console.log("User email failed:", err)
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}