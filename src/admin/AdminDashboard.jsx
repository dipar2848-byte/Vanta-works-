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

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error) {
      setLeads(data || [])
    } else {
      console.error("Error fetching leads:", error.message)
    }

    setLoading(false)
  }

  const filteredLeads = leads.filter((lead) => {
    const query = search.toLowerCase()
    return (
      lead.name?.toLowerCase().includes(query) ||
      lead.email?.toLowerCase().includes(query) ||
      lead.business?.toLowerCase().includes(query) ||
      lead.phone?.toLowerCase().includes(query)
    )
  })

  async function deleteLead(id) {
    await supabase.from("leads").delete().eq("id", id)
    fetchLeads()
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>

        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading leads...</p>
      ) : filteredLeads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <div className="leads-grid">
          {filteredLeads.map((lead) => (
            <div className="lead-card" key={lead.id}>
              <h3>{lead.name}</h3>
              <p><b>Business:</b> {lead.business}</p>
              <p><b>Email:</b> {lead.email}</p>
              <p><b>Phone:</b> {lead.phone}</p>
              <p><b>Message:</b> {lead.message}</p>
              <p className="timestamp">
                {lead.created_at
                  ? new Date(lead.created_at).toLocaleString()
                  : ""}
              </p>

              <button onClick={() => deleteLead(lead.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}