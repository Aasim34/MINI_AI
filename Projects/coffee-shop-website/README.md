# Coffee Shop Website

A vibrant online platform for coffee enthusiasts to explore menu items, place orders, and learn about coffee culture.

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

- User authentication and profiles
- Online ordering system
- Menu display with seasonal specials
- Customer reviews and ratings
- Blog section for coffee-related articles

## API Endpoints

- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get user details
- `GET /api/menu-items` - Get list of menu items
- `POST /api/orders` - Create a new order
- `POST /api/reviews` - Submit a new review

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
