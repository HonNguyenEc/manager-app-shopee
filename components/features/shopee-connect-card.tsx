"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/ui/status-badge";
import type { ShopIntegration } from "@/lib/mock-data";

export function ShopeeConnectCard({ shop }: { shop: ShopIntegration }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConnect = () => {
    setIsOpen(false);
    setShowSuccess(true);
  };

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900">Connection Details</h3>
          <StatusBadge
            label={shop.status}
            variant={shop.status === "Connected" ? "success" : "warning"}
          />
        </div>

        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-slate-500">Shop Name</dt>
            <dd className="font-medium text-slate-900">{shop.shopName}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Region</dt>
            <dd className="font-medium text-slate-900">{shop.region}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Status</dt>
            <dd className="font-medium text-slate-900">{shop.status}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Last Sync</dt>
            <dd className="font-medium text-slate-900">{shop.lastSyncTime}</dd>
          </div>
        </dl>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">Products Synced</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">2,348</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">Orders Synced</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">426 today</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">Sync Reliability</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">99.2%</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Connect Shopee Shop
        </button>

        {showSuccess && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            Shopee shop connected successfully
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-lg">
            <h4 className="text-base font-semibold text-slate-900">
              Simulate Shopee Connection
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              This is a demo flow for reviewer verification. Click confirm to simulate
              a successful Shopee shop connection.
            </p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConnect}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
              >
                Confirm Connection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
