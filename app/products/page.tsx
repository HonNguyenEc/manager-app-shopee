import { AppShell } from "@/components/layout/app-shell";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockProducts } from "@/lib/mock-data";

export default function ProductsPage() {
  return (
    <AppShell title="Products">
      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Catalog Sync Overview</h3>
            <p className="mt-1 text-sm text-slate-600">
              Realistic sample catalog for Shopee synchronization review.
            </p>
          </div>
          <div className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Last updated: 12 minutes ago
          </div>
        </div>
      </section>

      <DataTable
        title="Shopee Product Sync Table"
        description="10 sample products with stock, pricing, and synchronization status"
        headers={["Product Name", "SKU", "Stock", "Price", "Sync Status"]}
      >
        {mockProducts.map((product) => (
          <tr key={product.sku} className="text-sm text-slate-700">
            <td className="px-4 py-3 font-medium text-slate-900">{product.productName}</td>
            <td className="px-4 py-3">{product.sku}</td>
            <td className="px-4 py-3">{product.stock}</td>
            <td className="px-4 py-3">{product.price}</td>
            <td className="px-4 py-3">
              <StatusBadge label={product.syncStatus} variant={product.syncStatus === "Synced" ? "success" : "warning"} />
            </td>
          </tr>
        ))}
      </DataTable>
    </AppShell>
  );
}
