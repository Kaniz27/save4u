import { Link } from "react-router-dom";
import { Users, TrendingUp, CalendarClock, Percent } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useDashboardStats } from "@/hooks/useDashboard";
import { StatCard } from "@/components/ui/StatCard";
import { SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS, formatDateTime } from "@/lib/utils";

const PIE_COLORS = ["#4FB1E5", "#2E8FC2", "#0B1A2A", "#7DD3FC", "#94A3B8"];

export default function Dashboard() {
  usePageMeta("Admin Dashboard");
  const { stats, loading } = useDashboardStats();

  if (loading || !stats) {
    return <div className="text-slate-400">Loading dashboard…</div>;
  }

  const pieData = stats.leadsByService.map((s) => ({
    name: SERVICE_LABELS[s.service] ?? s.service,
    value: s.count,
  }));

  const barData = stats.leadsByStatus.map((s) => ({
    name: STATUS_LABELS[s.status] ?? s.status,
    count: s.count,
  }));

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Leads" value={stats.totalLeads} icon={Users} tone="blue" />
        <StatCard label="New This Week" value={stats.newThisWeek} icon={CalendarClock} tone="navy" />
        <StatCard label="Conversion Rate" value={`${stats.conversionRate}%`} icon={Percent} tone="navy" />
        <StatCard
          label="Converted Leads"
          value={stats.leadsByStatus.find((s) => s.status === "converted")?.count ?? 0}
          icon={TrendingUp}
          tone="blueDark"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="font-heading text-base font-bold text-slate-900">Leads by Service</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500">
            {pieData.map((d, i) => (
              <li key={d.name} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                {d.name} ({d.value})
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-heading text-base font-bold text-slate-900">Leads by Status</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#4FB1E5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h3 className="font-heading text-base font-bold text-slate-900">Recent Leads</h3>
          <Link to="/admin/leads" className="text-sm font-semibold text-brand-blue-dark hover:underline">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Service</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Received</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentLeads.map((lead) => (
                <tr key={lead._id} className="border-t border-slate-50 hover:bg-slate-50">
                  <td className="px-6 py-3">
                    <Link to={`/admin/leads/${lead._id}`} className="font-medium text-slate-800 hover:text-brand-blue-dark">
                      {lead.name}
                    </Link>
                  </td>
                  <td className="px-6 py-3 text-slate-500">{SERVICE_LABELS[lead.serviceInterest]}</td>
                  <td className="px-6 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_COLORS[lead.status]}`}>
                      {STATUS_LABELS[lead.status]}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-slate-500">{formatDateTime(lead.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
