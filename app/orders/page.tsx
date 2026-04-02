import { AppShell } from "@/components/layout/app-shell";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockOrders } from "@/lib/mock-data";

function mapOrderStatus(status: string) {
  if (status === "Completed" || status === "Shipped") return "success" as const;
  if (status === "Processing") return "info" as const;
  return "warning" as const;
}

export default function OrdersPage() {
  return (
    <AppShell title="Orders">
      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Order Feed Overview</h3>
            <p className="mt-1 text-sm text-slate-600">
              Sample Shopee order stream used for verification walkthrough.
            </p>
          </div>
          <div className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Source channel: Shopee
          </div>
        </div>
      </section>

      <DataTable
        title="Shopee Orders"
        description="10 sample orders showing end-to-end sync visibility"
        headers={["Order ID", "Customer", "Total", "Status", "Source"]}
      >
        {mockOrders.map((order) => (
          <tr key={order.orderId} className="text-sm text-slate-700">
            <td className="px-4 py-3 font-medium text-slate-900">{order.orderId}</td>
            <td className="px-4 py-3">{order.customer}</td>
            <td className="px-4 py-3">{order.total}</td>
            <td className="px-4 py-3">
              <StatusBadge label={order.status} variant={mapOrderStatus(order.status)} />
            </td>
            <td className="px-4 py-3">
              <StatusBadge label={order.source} variant="neutral" />
            </td>
          </tr>
        ))}
      </DataTable>
    </AppShell>
  );
}
