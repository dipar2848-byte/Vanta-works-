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
    }

    // 1. SAVE TO SUPABASE
    const { error } = await supabase
      .from("leads")
      .insert([lead])

    if (error) {
      setLoading(false)
      alert(error.message)
      return
    }

    // 2. SEND EMAIL NOTIFICATION + AUTO REPLY
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lead }),
      })
    } catch (err) {
      console.log("Email error:", err)
    }

    setLoading(false)
    alert("Submitted successfully!")
    e.target.reset()
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      
      <input
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        name="business"
        placeholder="Business Name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        required
      />

      <textarea
        name="message"
        placeholder="Tell us what you need..."
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Get Free Strategy Plan"}
      </button>

    </form>
  )
}