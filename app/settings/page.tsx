import { AppShell } from "@/components/layout/app-shell";
export default function SettingsPage() {
  return (
    <AppShell title="Settings">
      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Environment Profile</h3>
        <p className="mt-2 text-sm text-slate-600">
          This workspace is configured as a reviewer-facing trial environment with
          stable UI flows and sample integration datasets.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Trial Account Info</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Product name</dt>
              <dd className="font-medium text-slate-900">CommerceFlow</dd>
            </div>
            <div>
              <dt className="text-slate-500">Demo environment</dt>
              <dd className="font-medium text-slate-900">Shopee Verification Sandbox</dd>
            </div>
            <div>
              <dt className="text-slate-500">Contact email</dt>
              <dd className="font-medium text-slate-900">support@commerceflow-demo.com</dd>
            </div>
            <div>
              <dt className="text-slate-500">Business entity</dt>
              <dd className="font-medium text-slate-900">Ecentric Joint Stock Company</dd>
            </div>
            <div>
              <dt className="text-slate-500">Business address</dt>
              <dd className="font-medium text-slate-900">
                89 Phan Đình Phùng, Phường Phú Nhuận, Hồ Chí Minh, Việt Nam
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-slate-600">
            This is a verification environment with sample data for platform review.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Trial Access for Reviewer</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <p>
              <span className="font-medium">Login URL path:</span> /login
            </p>
            <p>
              <span className="font-medium">Reviewer account:</span> Provided in
              submission note only
            </p>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            This demo environment is prepared for platform verification and contains
            sample e-commerce integration data.
          </p>
        </div>
      </section>
    </AppShell>
  );
}
