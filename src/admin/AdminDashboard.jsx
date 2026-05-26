import { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabaseClient";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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

  async function updateStatus(id, status) {
    await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    fetchLeads();
  }

  const filtered = useMemo(() => {
    return leads
      .filter((l) => {
        const matchesSearch =
          (l.name + l.email + l.message)
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
          statusFilter === "all" ? true : (l.status || "new") === statusFilter;

        return matchesSearch && matchesStatus;
      });
  }, [leads, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: leads.length,
      new: leads.filter(l => (l.status || "new") === "new").length,
      contacted: leads.filter(l => l.status === "contacted").length,
      closed: leads.filter(l => l.status === "closed").length,
    };
  }, [leads]);

  return (
    <div className="crm">

      {/* SIDEBAR */}
      <aside className="crm-sidebar">

        <div className="brand">
          <div className="logo-box">VW</div>
          <div>
            <h2>VANTA WORKS</h2>
            <p>CRM SYSTEM</p>
          </div>
        </div>

        <nav>
          <button className="active">Dashboard</button>
          <button>Leads</button>
          <button>Settings</button>
        </nav>

        <div className="sidebar-footer">
          <p>Growth System</p>
        </div>

      </aside>

      {/* MAIN */}
      <main className="crm-main">

        {/* TOP BAR */}
        <div className="crm-topbar">
          <h1>CRM Dashboard</h1>

          <div className="filters">
            <input
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="kpi-grid">

          <div className="kpi-card">
            <h3>{stats.total}</h3>
            <p>Total Leads</p>
          </div>

          <div className="kpi-card">
            <h3>{stats.new}</h3>
            <p>New</p>
          </div>

          <div className="kpi-card">
            <h3>{stats.contacted}</h3>
            <p>Contacted</p>
          </div>

          <div className="kpi-card">
            <h3>{stats.closed}</h3>
            <p>Closed</p>
          </div>

        </div>

        {/* LEADS */}
        <section className="crm-section">

          {loading ? (
            <div className="muted">Loading CRM data...</div>
          ) : filtered.length === 0 ? (
            <div className="muted">No leads found.</div>
          ) : (
            filtered.map((lead) => (
              <div key={lead.id} className="crm-card">

                <div className="lead-info">
                  <h3>{lead.name}</h3>
                  <p>{lead.email}</p>
                  <span>{lead.message}</span>

                  <div className="status">
                    Status: <b>{lead.status || "new"}</b>
                  </div>
                </div>

                <div className="actions">

                  <select
                    value={lead.status || "new"}
                    onChange={(e) =>
                      updateStatus(lead.id, e.target.value)
                    }
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>

                  <button onClick={() => deleteLead(lead.id)}>
                    Delete
                  </button>

                </div>

              </div>
            ))
          )}

        </section>

      </main>
    </div>
  );
}