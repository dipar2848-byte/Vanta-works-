import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    setLoading(true);

    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    setLeads(data || []);
    setLoading(false);
  }

  async function deleteLead(id) {
    await supabase.from("leads").delete().eq("id", id);
    fetchLeads();
  }

  const filtered = leads.filter((l) =>
    (l.name + l.email + l.message)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="crm">

      {/* SIDEBAR */}
      <aside className="crm-sidebar">
        <div className="brand">
          <div className="logo-box">VW</div>
          <div>
            <h2>VANTA</h2>
            <p>WORKS CRM</p>
          </div>
        </div>

        <nav>
          <button className="active">Dashboard</button>
          <button>Leads</button>
          <button>Bookings</button>
          <button>Settings</button>
        </nav>

        <div className="sidebar-footer">
          <p>Admin Panel</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="crm-main">

        {/* TOP BAR */}
        <div className="crm-topbar">
          <h1>Dashboard</h1>

          <input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* LEAD LIST */}
        <section className="crm-section">

          {loading ? (
            <div className="muted">Loading system data...</div>
          ) : filtered.length === 0 ? (
            <div className="muted">No leads found.</div>
          ) : (
            filtered.map((lead) => (
              <div key={lead.id} className="crm-card">

                <div>
                  <h3>{lead.name}</h3>
                  <p>{lead.email}</p>
                  <span>{lead.message}</span>
                </div>

                <button onClick={() => deleteLead(lead.id)}>
                  Delete
                </button>

              </div>
            ))
          )}

        </section>

      </main>
    </div>
  );
}