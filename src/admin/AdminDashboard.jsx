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

  const filteredLeads = leads.filter((lead) =>
    (lead.name + lead.email + lead.message)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const stats = {
    total: leads.length,
    new: leads.filter(l => !l.status || l.status === "new").length,
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>VantaWorks CRM</h2>

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
      <main className="admin-main">

        {/* TOP BAR */}
        <div className="topbar">
          <h1>Dashboard</h1>

          <input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <h3>{stats.total}</h3>
            <p>Total Leads</p>
          </div>

          <div className="stat-card">
            <h3>{stats.new}</h3>
            <p>New Leads</p>
          </div>

          <div className="stat-card">
            <h3>--</h3>
            <p>Bookings</p>
          </div>

        </div>

        {/* CONTENT */}
        <div className="card">

          <h2>Recent Leads</h2>

          {loading ? (
            <p>Loading leads...</p>
          ) : filteredLeads.length === 0 ? (
            <p>No leads found.</p>
          ) : (
            <div className="lead-list">

              {filteredLeads.map((lead) => (
                <div key={lead.id} className="lead-card">

                  <div className="lead-info">
                    <h3>{lead.name}</h3>
                    <p>{lead.email}</p>
                    <span>{lead.message}</span>
                  </div>

                  <div className="lead-actions">
                    <button onClick={() => deleteLead(lead.id)}>
                      Delete
                    </button>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </main>
    </div>
  );
}