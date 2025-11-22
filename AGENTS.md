# Tennis Club - AI Agent Guidelines

This document provides essential information for AI agents working on the Tennis Club project.

## Project Overview

A full-stack monorepo application for managing a tennis club with React frontend and Hono backend.

**Tech Stack:**
- Frontend: React + Vite + TypeScript + TailwindCSS + Jotai
- Backend: Hono + Node.js + TypeScript + Drizzle ORM + LibSQL
- Testing: Vitest + React Testing Library
- Monorepo: npm workspaces

## Common Commands

### Development
```bash
# Start both frontend and backend (from root)
npm start

# Start frontend only
npm run dev --workspace=frontend

# Start backend only
npm run dev --workspace=server

# Run tests with coverage (frontend)
npm test --workspace=frontend
```

### Code Quality
```bash
# Lint entire codebase
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

### Building
```bash
# Build frontend
npm run build --workspace=frontend

# Build backend
npm run build --workspace=server

# Type check backend
npm run type-check --workspace=server
```

## Project Structure

```
tennis-club/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── app/        # App-level components (Header, Navbar, ThemeToggle)
│   │   │   ├── public/     # Public route components (LoginForm, RegisterForm)
│   │   │   ├── reserved/   # Protected route components (ProtectedRoute)
│   │   │   └── ui/         # Reusable UI components (Button, Card, Input, etc.)
│   │   ├── contexts/       # React contexts (ThemeContext)
│   │   ├── hooks/          # Custom React hooks (useAuth, useTheme, useLoginForm)
│   │   ├── layouts/        # Layout components (PrivateLayout, PublicLayout)
│   │   ├── lib/            # Utility functions (utils.ts)
│   │   ├── pages/          # Page components
│   │   │   ├── public/    # Public pages (HomePage, LoginPage, NotFoundPage, RegisterPage)
│   │   │   └── reserved/  # Protected pages (AppPage, Courts, Members)
│   │   ├── stores/         # Jotai atoms for state management
│   │   ├── types/          # TypeScript type definitions
│   │   ├── App.tsx         # Main App component
│   │   ├── AppRouter.tsx   # React Router configuration
│   │   └── main.tsx        # Application entry point
│   └── test/               # Test setup files
├── server/                  # Hono backend application
│   ├── src/
│   │   ├── api/            # API route controllers (members, courts)
│   │   ├── db/             # Database configuration
│   │   │   └── schema/    # Drizzle ORM schemas (members.ts, courts.ts)
│   │   └── index.ts        # Server entry point
│   └── drizzle.config.ts   # Drizzle ORM configuration
├── .ona/                    # Gitpod automations configuration
├── .devcontainer/          # Dev container configuration
└── package.json            # Root workspace configuration
```

## Code Conventions

### Import Aliases
Both frontend and backend use `@/` alias for src imports:
```typescript
// Frontend
import Button from '@/components/ui/Button'
import { userAtom } from '@/stores'

// Backend
import db from '@/db'
import membersController from '@/api/members'
```

### Prettier Configuration
- **No semicolons** (`semi: false`)
- **Single quotes** (`singleQuote: true`)
- **2 spaces** for indentation
- **100 character** line width
- **Arrow parens**: avoid when possible
- **Trailing commas**: ES5 style

### TypeScript
- Strict mode enabled
- Use explicit types for function parameters and return values
- Prefer interfaces over types for object shapes
- Use `React.FC` for functional components

### Testing
- **Location**: Place tests in `__tests__` directories next to the code
- **Naming**: `ComponentName.test.tsx` or `hookName.test.ts`
- **Coverage**: Aim for 100% statement coverage
- **Structure**: Use `describe` blocks to group related tests
- **Mocking**: Use `vi.mock()` for module mocking

Example test structure:
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Component Structure (Frontend)
```typescript
import React from 'react'
import { cn } from '@/lib/utils'

interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

const Component: React.FC<ComponentProps> = ({ className, children }) => {
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  )
}

export default Component
```

### API Route Structure (Backend)
```typescript
import { Hono } from 'hono'
import db from '@/db'

const controller = new Hono()

controller.get('/', async c => {
  // Implementation
  return c.json({ data: [] })
})

controller.post('/', async c => {
  // Implementation
  return c.json({ success: true })
})

export default controller
```

## Git Workflow

### Commit Message Format
Follow conventional commits style:
```
type: brief description

Examples:
feat: add user authentication
fix: resolve navigation bug
test: add coverage for LoginForm
chore: update dependencies
docs: update README
```

### Co-authoring
IMPORTANT: Always add co-author when committing:
```
Co-authored-by: Ona <no-reply@ona.com>
```

### Branch Naming
Use descriptive branch names:
```
feature/user-authentication
fix/navigation-bug
test/add-coverage
chore/update-deps
```

## Key Files and Their Purpose

### Frontend
- `vite.config.ts` - Vite configuration (IMPORTANT: must have `server.host: '0.0.0.0'` for Gitpod)
- `vitest.config.ts` - Test configuration
- `tailwind.config.js` - TailwindCSS configuration
- `components.json` - shadcn/ui component configuration
- `src/stores/index.ts` - Jotai atoms for global state
- `src/contexts/ThemeContext.tsx` - Theme provider for dark/light mode

### Backend
- `src/index.ts` - Server entry point (IMPORTANT: must have `hostname: '0.0.0.0'` for Gitpod)
- `drizzle.config.ts` - Database ORM configuration
- `src/db/schema/` - Database table schemas
- `.env` - Environment variables (DB_FILE_NAME)

### Root
- `.ona/automations.yaml` - Gitpod services configuration
- `.gitpod.yml` - Port and extension configuration
- `package.json` - Workspace configuration with concurrently

## Important Notes

### Gitpod Preview URLs
IMPORTANT: For preview URLs to work in Gitpod:
- Frontend: `vite.config.ts` MUST have `server.host: '0.0.0.0'`
- Backend: `src/index.ts` MUST have `hostname: '0.0.0.0'` in serve config

Without binding to `0.0.0.0`, services will only be accessible locally and preview URLs will show "Service Unavailable".

### State Management
- Use Jotai atoms for global state (see `src/stores/index.ts`)
- Use React Context for theme management
- Avoid prop drilling - use atoms or context

### Routing
- Use React Router v7
- Protected routes wrapped in `<ProtectedRoute>`
- Public routes wrapped in `<PublicRoute>`
- Route configuration in `AppRouter.tsx`

### Authentication
- User state stored in `userAtom` (Jotai)
- Access token stored in `sessionStorage`
- Auth logic in `useAuth` hook
- Login form logic in `useLoginForm` hook

### Database
- Using LibSQL (SQLite-compatible)
- Drizzle ORM for type-safe queries
- Schemas defined in `server/src/db/schema/`
- Database file path from `DB_FILE_NAME` env variable

**Database Schema:**
- `members` table: id, name, type (admin|member|coach), description, image, createdAt, updatedAt
- `courts` table: id, name, description, price, image, createdAt, updatedAt

### UI Components
- Using Radix UI primitives
- Styled with TailwindCSS
- Utility function `cn()` for conditional classes
- Components in `src/components/ui/`

## Testing Guidelines

### Frontend Testing
- Use `@testing-library/react` for component tests
- Use `@testing-library/user-event` for user interactions
- Mock external dependencies (e.g., `useAuth` hook)
- Wrap components with necessary providers (HashRouter, Provider, ThemeProvider)
- Test user-visible behavior, not implementation details

### Coverage Requirements
- Aim for 100% statement coverage
- Branch coverage should be >95%
- All new features must include tests
- Run tests before committing: `npm test --workspace=frontend`

### Test Providers
Common test wrapper pattern:
```typescript
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider>
    <ThemeProvider>
      <HashRouter>{children}</HashRouter>
    </ThemeProvider>
  </Provider>
)
```

## Environment Setup

### Node.js Version
IMPORTANT: Use Node.js v24.10.0 (specified in `.nvmrc`)
```bash
nvm use
```

### Dependencies Installation
```bash
# Install all workspace dependencies
npm install

# Install specific workspace
npm install --workspace=frontend
npm install --workspace=server
```

### Native Binaries
If you encounter missing native binding errors:
```bash
# Frontend
cd frontend
npm install @rollup/rollup-linux-x64-gnu
npm install lightningcss-linux-x64-gnu
npm install @tailwindcss/oxide-linux-x64-gnu

# Then reinstall
rm -rf node_modules package-lock.json
npm install
```

## Gitpod Automations

Services are automatically started via `.ona/automations.yaml`:

```bash
# View service status
gitpod automations service list

# Start/stop services
gitpod automations service start backend
gitpod automations service stop frontend

# View logs
gitpod automations service logs backend

# Manage ports
gitpod environment port list
gitpod environment port open 3000 --name backend
```

## Common Issues and Solutions

### "Service Unavailable" on Preview URL
- Ensure server binds to `0.0.0.0`, not `localhost`
- Check `vite.config.ts` has `server.host: '0.0.0.0'`
- Check `server/src/index.ts` has `hostname: '0.0.0.0'`

### Tests Failing
- Ensure all providers are wrapped correctly
- Check for missing mocks (especially `useAuth`)
- Verify test file extension (`.tsx` for JSX, `.ts` for plain TypeScript)

### Import Errors
- Use `@/` alias for imports from `src/`
- Check `tsconfig.json` has correct path mappings
- Ensure file extensions are correct (`.ts` vs `.tsx`)

### Linting Errors
- Run `npm run lint:fix` to auto-fix
- Check `.prettierrc.json` for formatting rules
- Ensure no semicolons (project uses `semi: false`)

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Hono Documentation](https://hono.dev/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Gitpod Documentation](https://www.gitpod.io/docs)

## Quick Reference

| Task | Command |
|------|---------|
| Start dev servers | `npm start` |
| Run tests | `npm test --workspace=frontend` |
| Lint code | `npm run lint` |
| Format code | `npm run format` |
| Build frontend | `npm run build --workspace=frontend` |
| Build backend | `npm run build --workspace=server` |
| View services | `gitpod automations service list` |
| View ports | `gitpod environment port list` |
