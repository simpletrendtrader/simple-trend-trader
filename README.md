# SIMPLE TREND TRADER

Trade Smart. Trade Simple.

Full-stack SaaS trading platform with JWT authentication, protected dashboard routes, admin-managed trade signals, VIP education content, and trading journal analytics.

## Folder Structure

```text
simple trend trader/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

## Features

- JWT signup/login with protected frontend routes
- User dashboard with stats and today's signals
- VIP-locked trade signals for premium members
- Education library with category-based video content
- Trading journal with performance tracking
- Admin panel for signals, videos, and user membership management
- Glassmorphism dark UI with neon green and gold accents
- Responsive layout with animated cards and a market ticker

## API Routes

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Password Recovery

- `POST /api/password/forgot-password`
- `POST /api/password/reset-password/:token`

### Billing

- `GET /api/billing/plans`
- `POST /api/billing/checkout`
- `POST /api/billing/portal`

### Signals

- `GET /api/signals`
- `POST /api/signals` `admin`
- `PUT /api/signals/:id` `admin`
- `DELETE /api/signals/:id` `admin`

### Education

- `GET /api/education`
- `POST /api/education` `admin`
- `PUT /api/education/:id` `admin`
- `DELETE /api/education/:id` `admin`

### Journal

- `GET /api/journal`
- `POST /api/journal`

### Users/Admin

- `GET /api/users` `admin`
- `PUT /api/users/:id` `admin`
- `GET /api/users/admin-overview` `admin`

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Local `.env` files are already included with placeholder values for convenience. Replace them with your real production values before deploying.

`server/.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
STRIPE_PAYMENT_LINK_VIP_MONTHLY=https://buy.stripe.com/your-link
STRIPE_CUSTOMER_PORTAL_URL=https://billing.stripe.com/p/login/your-link
```

`client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run the apps

Backend:

```bash
npm run server:dev
```

Frontend:

```bash
npm run client:dev
```

### 4. Seed your admin account

Create or upgrade an admin user directly from the project:

```bash
npm run seed:admin --workspace server
```

Optional custom credentials:

```bash
npm run seed:admin --workspace server -- "Your Name" "admin@yourbrand.com" "YourStrongPassword123!"
```

### 5. Seed demo content

Add starter signals and education videos for testing:

```bash
npm run seed:demo --workspace server
```

## Deployment Guide

Detailed deployment steps are also available in [DEPLOYMENT.md](/Users/ashutoshkumar/Documents/simple%20trend%20trader/DEPLOYMENT.md).

### Frontend on Vercel

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Set the root directory to `client`.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variable:
   - `VITE_API_URL=https://your-render-api.onrender.com/api`
7. Deploy.

### Backend on Render

1. Create a new Web Service in Render from the same GitHub repo.
2. Set the root directory to `server`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables:
   - `PORT=5000`
   - `MONGODB_URI=your_mongodb_atlas_connection_string`
   - `JWT_SECRET=your_super_secret_key`
   - `CLIENT_URL=https://your-vercel-app.vercel.app`
6. Deploy.

You can also use the included [render.yaml](/Users/ashutoshkumar/Documents/simple%20trend%20trader/render.yaml) for Blueprint-based deployment.

### MongoDB Atlas

1. Create a cluster in MongoDB Atlas.
2. Create a database user and whitelist your deployment IPs or allow access from anywhere for initial setup.
3. Copy the connection string into `MONGODB_URI`.
4. Use a database name like `simple-trend-trader`.

## Recommended Next Steps

1. Replace placeholder `.env` values with your real Atlas URI and JWT secret.
2. Replace video URL inputs with cloud upload storage such as Cloudinary or S3.
3. Replace Stripe payment link placeholders with your real live checkout and customer portal URLs.
4. Connect an email provider for password reset delivery.
5. Add richer chart analytics and signal filtering.
