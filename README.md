# CommerceFlow — Shopee Verification Demo

CommerceFlow is a minimal, production-like admin dashboard demo built for **Shopee Open Platform verification**.

The app simulates a realistic e-commerce operations system with:
- Login protection (demo account)
- Dashboard metrics
- Shopee integration page with fake connection flow
- Product and order sync views
- Settings page with reviewer trial access details

> This project intentionally uses mock data and simulated integration behavior (no real Shopee API and no database) so it can be deployed quickly for platform review.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Server Actions + Proxy-based route protection
- In-memory mock data

## Trial Reviewer Credentials

- **Login URL**: `/login`
- **Email**: `reviewer@testdemo.com`
- **Password**: `123456`

## Local Run Instructions

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open browser:

```text
http://localhost:3000
```

4. Login using the reviewer account above.

## Production Build Check

```bash
npm run build
npm run start
```

## Vercel Deployment (Step-by-step)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Keep default settings (Framework: Next.js).
5. No environment variables are required for this demo.
6. Click **Deploy**.
7. After deployment, open `https://<your-domain>/login` and use trial credentials.

## Demo Purpose Note

This demo environment is prepared for platform verification and contains sample e-commerce integration data.

