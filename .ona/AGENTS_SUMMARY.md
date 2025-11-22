# AGENTS.md Summary

This file provides a quick overview of what's covered in the main AGENTS.md file.

## What's Included

### 1. Project Overview
- Tech stack (React, Hono, TypeScript, TailwindCSS, Drizzle ORM)
- Monorepo structure with npm workspaces

### 2. Common Commands
- Development: `npm start`, workspace-specific commands
- Code quality: lint, format
- Building and testing

### 3. Project Structure
- Detailed directory tree
- Component organization (app, public, reserved, ui)
- Backend structure (api, db, schema)

### 4. Code Conventions
- Import aliases (`@/`)
- Prettier rules (no semicolons, single quotes, 2 spaces)
- TypeScript guidelines
- Testing patterns and structure
- Component and API route templates

### 5. Git Workflow
- Commit message format (conventional commits)
- Co-authoring requirement (Ona)
- Branch naming conventions

### 6. Key Files
- Configuration files and their purposes
- Critical settings for Gitpod (0.0.0.0 binding)

### 7. Important Notes
- Gitpod preview URL requirements
- State management (Jotai, Context)
- Routing (React Router v7)
- Authentication flow
- Database schema (members, courts)
- UI component patterns

### 8. Testing Guidelines
- Testing library usage
- Coverage requirements (100% statements, >95% branches)
- Test wrapper patterns
- Mocking strategies

### 9. Environment Setup
- Node.js version (v24.10.0)
- Dependency installation
- Native binary fixes

### 10. Gitpod Automations
- Service management commands
- Port configuration
- Logs and debugging

### 11. Common Issues
- Service unavailable fixes
- Test failures
- Import errors
- Linting issues

### 12. Quick Reference
- Command cheat sheet table

## Key Takeaways for AI Agents

**CRITICAL:**
- Always bind servers to `0.0.0.0` for Gitpod preview URLs
- Use `@/` import alias for all src imports
- No semicolons in code (Prettier config)
- Add `Co-authored-by: Ona <no-reply@ona.com>` to commits
- Aim for 100% test coverage
- Use Node.js v24.10.0

**Testing:**
- Place tests in `__tests__` directories
- Use `.tsx` extension for JSX tests
- Wrap components with necessary providers
- Mock `useAuth` and other external dependencies

**Code Style:**
- Single quotes, no semicolons
- 100 character line width
- Use `React.FC` for components
- Use `cn()` utility for conditional classes

**Database:**
- Drizzle ORM with LibSQL
- Two tables: members (with type: admin|member|coach) and courts
- Timestamps in integer format

## File Location

The complete AGENTS.md file is located at the repository root:
`/workspaces/tennis-club/AGENTS.md`
