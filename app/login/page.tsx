import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginAction } from "@/app/actions/auth";
import { AUTH_COOKIE_NAME } from "@/lib/auth";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    next?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const cookieStore = await cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (session) {
    redirect("/dashboard");
  }

  const params = await searchParams;
  const nextPath =
    params.next?.startsWith("/") && !params.next.startsWith("//")
      ? params.next
      : "/dashboard";
  const hasError = params.error === "invalid_credentials";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            CommerceFlow
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">Sign in to continue</h1>
          <p className="mt-2 text-sm text-slate-600">
            Demo account for Shopee platform verification.
          </p>
        </div>

        {hasError && (
          <div className="mb-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            Invalid credentials. Please use the reviewer account below.
          </div>
        )}

        <form action={loginAction} className="space-y-4">
          <input type="hidden" name="next" value={nextPath} />

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="reviewer@testdemo.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="123456"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Login
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Trial Access for Reviewer</p>
          <p className="mt-2 text-xs text-slate-600">Login URL: /login</p>
          <p className="text-xs text-slate-600">
            Reviewer credentials are provided in the submission note.
          </p>
        </div>
      </div>
    </main>
  );
}
