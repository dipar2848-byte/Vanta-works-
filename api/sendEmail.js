import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  const { lead } = req.body

  try {
    await resend.emails.send({
      from: "VantaWorks <onboarding@resend.dev>",
      to: "YOUR_EMAIL@gmail.com",
      subject: "New Lead Received",
      html: `
        <h2>New Lead</h2>
        <p>Name: ${lead.name}</p>
        <p>Business: ${lead.business}</p>
        <p>Email: ${lead.email}</p>
        <p>Phone: ${lead.phone}</p>
        <p>Message: ${lead.message}</p>
      `,
    })

    await resend.emails.send({
      from: "VantaWorks <onboarding@resend.dev>",
      to: lead.email,
      subject: "We received your request ✔",
      html: `<p>Thanks! We will contact you soon.</p>`,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
