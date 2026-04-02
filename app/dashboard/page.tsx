import { AppShell } from "@/components/layout/app-shell";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { dashboardStats } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <section className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-900">
        <p className="font-medium">Platform Verification Environment</p>
        <p className="mt-1 text-xs text-indigo-800">
          CommerceFlow is operating in demo mode for Shopee Open Platform review.
          Business workflows are production-like while integration data is mocked.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            helper={stat.helper}
            trend={stat.trend}
            tone={stat.tone}
          />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900">
              Integration Health Snapshot
            </h3>
            <StatusBadge label="Operational" variant="success" />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Catalog Sync Queue</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Healthy</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Order Ingestion</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">0 failed records</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Next Scheduled Sync</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">in 15 minutes</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-3 text-xs text-blue-800">
            <span className="font-semibold">Notice:</span> This workspace is actively used by
            operations staff in demo mode with sanitized and mocked integration data.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">
            Trial Access for Reviewer
          </h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-800">Login URL:</span> /login
            </p>
            <p>
              <span className="font-medium text-slate-800">Account access:</span>{" "}
              Shared separately in reviewer submission note
            </p>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            This demo environment is prepared for platform verification and
            contains sample e-commerce integration data.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900">Recent System Events</h3>
          <p className="text-xs text-slate-500">Last 30 minutes</p>
        </div>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <p>• 11:58 — Shopee shop connection heartbeat verified.</p>
          <p>• 11:52 — Product catalog delta sync completed (24 updates).</p>
          <p>• 11:45 — Order feed refreshed (17 new orders).</p>
        </div>
      </section>
    </AppShell>
  );
}
