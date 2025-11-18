# FitTrack

A fitness tracking application that allows users to monitor their workouts, set goals, and track progress over time.

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

- User registration and authentication
- Workout logging
- Goal setting
- Progress tracking with charts
- Social sharing and challenges

## API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/workouts` - Get all workouts for a user
- `POST /api/workouts` - Log a new workout
- `GET /api/goals` - Get user's fitness goals

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
