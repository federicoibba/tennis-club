import React from 'react'
import { Link } from 'react-router'
import ThemeToggle from '@/components/ui/ThemeToggle'

const AppHeader: React.FC = () => {
  return (
    <header className="bg-background border-b px-8 py-2 min-h-16 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl text-primary font-bold">Tennis Club</h1>
      </Link>
      <nav className="flex items-center gap-4">
        <ul className="flex flex-row items-center gap-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default AppHeader
