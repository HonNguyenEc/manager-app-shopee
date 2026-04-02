"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Shopee Integration", href: "/integrations/shopee" },
  { label: "Products", href: "/products" },
  { label: "Orders", href: "/orders" },
  { label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-200 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          CommerceFlow
        </p>
        <h1 className="mt-2 text-lg font-semibold text-slate-900">Operations Console</h1>
        <p className="mt-1 text-xs text-slate-500">Region: Vietnam • Live Demo</p>
      </div>

      <nav className="px-3 py-4">
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Main Navigation
        </p>
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-1 block rounded-xl px-3 py-2.5 text-sm transition ${
                isActive
                  ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-4 pb-5">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium text-slate-700">Shopee Sync Health</p>
          <p className="mt-1 text-[11px] text-slate-500">All services operational</p>
        </div>
      </div>
    </aside>
  );
}
