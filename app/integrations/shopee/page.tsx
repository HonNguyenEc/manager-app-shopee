import { AppShell } from "@/components/layout/app-shell";
import { ShopeeConnectCard } from "@/components/features/shopee-connect-card";
import { shopeeIntegration } from "@/lib/mock-data";

export default function ShopeeIntegrationPage() {
  return (
    <AppShell title="Shopee Integration">
      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Integration Hub</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              Shopee Vietnam Store Connector
            </h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Live Connection
          </span>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ShopeeConnectCard shop={shopeeIntegration} />

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">API Simulation Scope</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>OAuth/authorization flow is simulated for reviewer demonstration.</li>
              <li>Product and order synchronization statuses are mock operational data.</li>
              <li>No customer production data is connected in this verification workspace.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Reviewer Steps</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Login</li>
            <li>Open Shopee Integration</li>
            <li>Verify shop connection status</li>
            <li>Review synced products and orders</li>
          </ol>

          <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs text-blue-800">
            This flow is intentionally simulated for verification while preserving a
            production-like operational interface.
          </div>
        </div>
      </section>
    </AppShell>
  );
}
