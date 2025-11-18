# Trading Portfolio

A comprehensive app for managing and tracking trading portfolios across various assets.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your database URL and other settings.

### 3. Setup Database
```bash
npx prisma db push
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/pages/` - Next.js pages and API routes
- `src/components/` - React components
- `src/styles/` - CSS and styling
- `src/lib/` - Utility functions
- `prisma/` - Database schema

## Features

- User authentication and authorization
- Portfolio creation and management
- Real-time market data integration
- Performance analytics and reporting
- Alerts for price changes and market events
- Asset allocation visualization

## API Endpoints

- `POST /api/users` - Create a new user
- `POST /api/users/login` - User login
- `GET /api/portfolios` - Get all portfolios for a user
- `POST /api/portfolios` - Create a new portfolio
- `GET /api/assets` - Get all assets in a portfolio

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS 3
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Sync database schema
- `npm run db:generate` - Generate Prisma client

## Deployment

This project can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- Heroku
- AWS
- DigitalOcean
- Any Node.js hosting

## License

MIT

---

Generated with AI Full-Stack Generator v3.0 (Enhanced)
