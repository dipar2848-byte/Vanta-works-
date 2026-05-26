import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

export default function AdminDashboard() {
  const [leads, setLeads] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLeads()
  }, [])

  async function fetchLeads() {
    setLoading(true)

    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })

    setLeads(data || [])
    setLoading(false)
  }

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase()
    return (
      l.name?.toLowerCase().includes(q) ||
      l.email?.toLowerCase().includes(q) ||
      l.phone?.toLowerCase().includes(q) ||
      l.business?.toLowerCase().includes(q)
    )
  })

  return (
    <div className="crm">
      
      {/* TOP BAR */}
      <div className="crm-topbar">
        <h2>Leads Dashboard</h2>

        <input
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CONTENT */}
      <div className="crm-content">

        {loading ? (
          <div className="crm-state">Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div className="crm-state">No leads found</div>
        ) : (
          <div className="crm-table">

            <div className="crm-header">
              <span>Name</span>
              <span>Business</span>
              <span>Email</span>
              <span>Phone</span>
              <span>Message</span>
              <span>Date</span>
            </div>

            {filtered.map((l) => (
              <div className="crm-row" key={l.id}>
                <span>{l.name}</span>
                <span>{l.business}</span>
                <span>{l.email}</span>
                <span>{l.phone}</span>
                <span>{l.message}</span>
                <span>
                  {l.created_at
                    ? new Date(l.created_at).toLocaleDateString()
                    : ""}
                </span>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  )
}