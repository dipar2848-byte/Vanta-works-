import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function AdminDashboard() {
  const [leads, setLeads] = useState([])
  const [search, setSearch] = useState('')

  const fetchLeads = async () => {
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    setLeads(data || [])
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const deleteLead = async (id) => {
    await supabase.from('leads').delete().eq('id', id)
    fetchLeads()
  }

  const filtered = leads.filter((l) =>
    (l.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (l.email || '').toLowerCase().includes(search.toLowerCase()) ||
    (l.business || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: 20, background: '#0b0b0f', minHeight: '100vh' }}>
      <h2 style={{ color: 'white' }}>Leads Dashboard</h2>

      <input
        placeholder="Search leads..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filtered.map((lead) => (
          <div key={lead.id} style={{ margin: 10, padding: 10, background: '#151520', color: 'white' }}>
            <div>{lead.name}</div>
            <div>{lead.email}</div>
            <div>{lead.business}</div>

            <button onClick={() => deleteLead(lead.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
