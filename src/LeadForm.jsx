import { useState } from "react"
import { supabase } from "./supabaseClient"

export default function LeadForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.target)

    const lead = {
      name: form.get("name"),
      business: form.get("business"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
      stage: "followup_sent",
      email_sent: false,
      whatsapp_sent: false,
    }

    // 1. INSERT LEAD
    const { data, error } = await supabase
      .from("leads")
      .insert([lead])
      .select()
      .single()

    if (error) {
      console.log("Supabase insert error:", error)
      setLoading(false)
      alert(error.message)
      return
    }

    const leadId = data.id

    // 2. WHATSAPP NOTIFICATION (NON-BLOCKING)
    const whatsappPromise = fetch("https://YOUR-WHATSAPP-API-ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_API_KEY",
      },
      body: JSON.stringify({
        to: lead.phone,
        message: `Hi ${lead.name}, thanks for contacting VantaWorks 🚀 We’ve received your request and will get back to you shortly.`,
      }),
    })
      .then(async () => {
        const { error } = await supabase
          .from("leads")
          .update({ whatsapp_sent: true })
          .eq("id", leadId)

        if (error) console.log("WhatsApp CRM update error:", error)
      })
      .catch((err) => console.log("WhatsApp API error:", err))

    // 3. EMAIL NOTIFICATION (RESEND)
    const emailPromise = fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead }),
    })
      .then(async () => {
        const { error } = await supabase
          .from("leads")
          .update({ email_sent: true })
          .eq("id", leadId)

        if (error) console.log("Email CRM update error:", error)
      })
      .catch((err) => console.log("Email API error:", err))

    // 4. RUN BOTH
    await Promise.allSettled([whatsappPromise, emailPromise])

    setLoading(false)
    alert("Submitted successfully!")
    e.target.reset()
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" required />
      <input name="business" placeholder="Business Name" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <input name="phone" placeholder="Phone Number" required />
      <textarea name="message" placeholder="Tell us what you need..." required />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Get Free Strategy Plan"}
      </button>
    </form>
  )
}