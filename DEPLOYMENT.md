# SIMPLE TREND TRADER Deployment Workflow

This project is ready for a standard split deployment:

- Frontend on Vercel
- Backend on Render
- Database on MongoDB Atlas

## 1. Prepare Secrets

Before deploying, update these values:

- [server/.env](/Users/ashutoshkumar/Documents/simple%20trend%20trader/server/.env)
- [client/.env](/Users/ashutoshkumar/Documents/simple%20trend%20trader/client/.env)

Required backend secrets:

- `MONGODB_URI`
- `JWT_SECRET`
- `CLIENT_URL`
- `STRIPE_PAYMENT_LINK_VIP_MONTHLY`
- `STRIPE_CUSTOMER_PORTAL_URL`

Required frontend secret:

- `VITE_API_URL`

## 2. Push to GitHub

This repo is already initialized locally on the `main` branch with the first commit created.

Create a new empty GitHub repository, then connect and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/simple-trend-trader.git
git push -u origin main
```

If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/simple-trend-trader.git
git push -u origin main
```

## 3. Deploy the Backend to Render

This repo already includes [render.yaml](/Users/ashutoshkumar/Documents/simple%20trend%20trader/render.yaml).

In Render:

1. Create a new Blueprint or Web Service from your GitHub repo.
2. If using Blueprint, Render will detect `render.yaml`.
3. Set these env vars in Render:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `CLIENT_URL`
   - `STRIPE_PAYMENT_LINK_VIP_MONTHLY`
   - `STRIPE_CUSTOMER_PORTAL_URL`
4. Deploy the service.
5. Copy the backend URL, for example:
   - `https://simple-trend-trader-api.onrender.com`

## 4. Deploy the Frontend to Vercel

This repo already includes [client/vercel.json](/Users/ashutoshkumar/Documents/simple%20trend%20trader/client/vercel.json).

In Vercel:

1. Import the GitHub repo.
2. Set the root directory to `client`.
3. Add:
   - `VITE_API_URL=https://your-render-url.onrender.com/api`
4. Deploy.

## 5. Connect Frontend and Backend

After Vercel gives you the production frontend URL:

1. Go back to Render.
2. Set `CLIENT_URL=https://your-vercel-domain.vercel.app`
3. Redeploy the backend if needed.

## 6. Create the First Production Admin

After backend deployment, create your admin against the production database by running the seed script with production env values available:

```bash
npm run seed:admin --workspace server -- "SIMPLE TREND TRADER" "admin@simpletrendtrader.com" "ChangeThisPassword123!"
```

Optional demo content:

```bash
npm run seed:demo --workspace server
```

## 7. First Admin Workflow

After logging in as admin:

1. Open `/app/admin`
2. Create public and VIP signals
3. Add free and VIP education videos
4. Upgrade selected users from `free` to `vip`
5. Verify locked content appears correctly on a non-VIP account

## 8. Password Reset Workflow

The current implementation is app-ready but email-provider agnostic:

1. User opens `/forgot-password`
2. Backend generates a secure token and reset URL
3. Right now the reset URL is returned in the API response and logged on the server
4. In production, connect an email provider and send that URL automatically

Recommended providers:

- Resend
- SendGrid
- Postmark

## 9. Recommended Production Upgrades

- Add Stripe or Razorpay for paid VIP subscriptions
- Add Cloudinary or S3 for real video/media uploads
- Add refresh tokens and password reset flows
- Add analytics, filtering, and audit logging
