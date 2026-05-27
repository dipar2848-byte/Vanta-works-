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
      status: "New",
      confirmation_sent: false,
    }

    // 1. SAVE TO SUPABASE
    const { data, error } = await supabase
      .from("leads")
      .insert([lead])
      .select()
      .single()

    if (error) {
      console.log("Supabase error:", error)
      setLoading(false)
      alert(error.message)
      return
    }

    const leadId = data.id

    // 2. WHATSAPP NOTIFICATION
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
    }).catch((err) => console.log("WhatsApp error:", err))

    // 3. EMAIL (RESEND VIA YOUR API)
    const emailPromise = fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead }),
    }).catch((err) => console.log("Email error:", err))

    // Run both in parallel
    await Promise.allSettled([whatsappPromise, emailPromise])

    // 4. UPDATE CRM STATUS
    await supabase
      .from("leads")
      .update({
        confirmation_sent: true,
      })
      .eq("id", leadId)

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