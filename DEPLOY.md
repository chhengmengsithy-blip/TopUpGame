# SithyTOPUP — Deploy to Vercel + Neon (Free, ~10 min)

## Step 1 — Create Neon database (2 min)

1. Go to https://neon.tech → **Sign up** (GitHub login fastest)
2. Create Project → name it `Sithytopup` → pick region **Singapore** (closest to KH)
3. Copy the **connection string** — looks like:
   ```
   postgresql://neondb_owner:xxxxx@ep-xxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
   ```
   **SAVE THIS** — you need it twice.

## Step 2 — Push code to GitHub (3 min)

In your project folder:
```powershell
git init
git add .
git commit -m "Initial commit"
```

Then on https://github.com/new create a new **private** repo called `Sithytopup` → copy the commands GitHub shows → paste in terminal. Usually:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/sithytopup.git
git branch -M main
git push -u origin main
```

## Step 3 — Seed your Neon DB locally (1 min)

Create a **temporary** `.env` file in the project:
```
DATABASE_URL="<paste your Neon connection string here>"
JWT_SECRET="any-long-random-string-min-32-chars-hereeeeee"
ADMIN_EMAIL="Sithy@gmail.com"
ADMIN_PASSWORD="SithyAdmin123$"
PAYMENT_SIMULATION_MODE="true"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

Then run:
```powershell
npx prisma db push
npm run db:seed
```

This creates all tables in Neon and loads your games + admin user.

## Step 4 — Deploy to Vercel (3 min)

1. Go to https://vercel.com → **Sign up with GitHub**
2. Click **Add New… → Project** → Import your `Sithytopup` repo
3. **Framework Preset**: Next.js (auto-detected)
4. Expand **Environment Variables** → add ALL of these:

   | Name | Value |
   |---|---|
   | `DATABASE_URL` | your Neon connection string |
   | `JWT_SECRET` | same 32-char random string from Step 3 |
   | `ADMIN_EMAIL` | `admin@Sithytopup.com` |
   | `ADMIN_PASSWORD` | your admin password |
   | `PAYMENT_SIMULATION_MODE` | `true` |
   | `NEXT_PUBLIC_BASE_URL` | **leave blank for now**, update after deploy |
   | `KHPAY_BASE_URL` | `https://khpay.site/api/v1` |
   | `KHPAY_API_KEY` | (blank — sim mode is on) |
   | `KHPAY_WEBHOOK_SECRET` | (blank) |

5. Click **Deploy** → wait ~2 min

## Step 5 — Post-deploy (30 sec)

1. After deploy succeeds, copy your live URL (e.g. `https://Sithytopup.vercel.app`)
2. Go to **Project Settings → Environment Variables** → set `NEXT_PUBLIC_BASE_URL` to that URL
3. **Deployments → Redeploy** → done

## ✅ You're live

- Public site: `https://Sithytopup.vercel.app`
- Admin: `https://Sithytopup.vercel.app/admin/login`

## Custom domain (optional, later)

Project Settings → **Domains** → add your domain → Vercel gives you DNS records to paste at your registrar. Takes 5-30 min to propagate.

## When you're ready for real payments

Set `PAYMENT_SIMULATION_MODE=false` and fill in `KHPAY_API_KEY` + `KHPAY_WEBHOOK_SECRET` from your KHPay merchant dashboard → redeploy.
