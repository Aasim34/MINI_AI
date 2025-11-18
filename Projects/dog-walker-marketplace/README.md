# Dog Walker Marketplace

A platform connecting dog owners with walkers, featuring real-time GPS tracking and user reviews.

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

- Real-time GPS tracking
- User reviews and ratings
- User profiles for dog owners and walkers
- Booking and payment processing
- Push notifications for updates
- Search and filter functionality

## API Endpoints

- `GET /api/users` - Get user profiles
- `POST /api/walks` - Create a new walk
- `GET /api/walks/:id` - Get details of a specific walk
- `POST /api/reviews` - Submit a review
- `GET /api/walks/track/:id` - Track a walk in real-time

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
