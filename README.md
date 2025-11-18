# Tennis Club

A full-stack web application for managing a tennis club. This project consists of a React frontend and a Node.js/Hono backend, managed as a monorepo.

## Tech Stack

### Frontend
- **Framework:** React (via Vite)
- **Styling:** TailwindCSS
- **UI Components:** Radix UI
- **State Management:** Jotai
- **Icons:** Lucide React
- **Language:** TypeScript

### Backend
- **Runtime:** Node.js
- **Framework:** Hono
- **Language:** TypeScript

## Prerequisites

- Node.js (v24.10.0) - Recommended to use `nvm` to switch to the correct version:
  ```bash
  nvm use
  ```
- npm

## Getting Started

1. **Clone the repository**

2. **Install dependencies**
   Install dependencies for the root, frontend, and backend workspaces:
   ```bash
   npm install
   ```

3. **Start the application**
   Run both the frontend and backend development servers concurrently:
   ```bash
   npm start
   ```
   - Frontend will run on `http://localhost:5173`
   - Backend will run on `http://localhost:3000`

## Project Structure

```
tennis-club/
├── frontend/         # React frontend application
├── server/           # Hono backend application
├── package.json      # Root package.json with workspace configuration
└── ...
```

## Available Scripts

Run these commands from the root directory:

- `npm start`: Starts both frontend and backend in development mode.
- `npm run lint`: Lints the entire codebase (frontend and backend).
- `npm run lint:fix`: Fixes linting errors.
- `npm run format`: Formats code using Prettier.
- `npm run format:check`: Checks if code is formatted correctly.
