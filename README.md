# Smart Workout Dashboard Backend

Built with **NestJS**, **Prisma**, and **PostgreSQL**.

## Prerequisites

- Node.js (v18+)
- Docker (for local database) OR a running PostgreSQL instance

## Setup

1. **Install Dependencies**
   ```bash
   npm install.
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env` and update the values.
   ```bash
   cp .env.example .env
   ```

3. **Database Setup**
   If you have Docker, run:
   ```bash
   docker-compose up -d
   ```
   
   If you use an external DB (like Liara), ensure `DATABASE_URL` in `.env` is correct.

4. **Run Migrations & Seed**
   This will create tables and insert initial data.
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

5. **Run Server**
   ```bash
   npm run start:dev
   ```
   Server will start at `http://localhost:3001`.

## Project Structure

- `src/prisma`: Database connection service.
- `src/workouts`: Workout management module.
- `prisma/schema.prisma`: Database schema definition.
- `prisma/seed.ts`: Initial data script.
