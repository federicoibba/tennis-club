import React from 'react'
import { Link } from 'react-router'
import AppNavbar from './Navbar'

const AppHeader: React.FC = () => {
  return (
    <header className="bg-background border-b px-8 py-2 min-h-16 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl text-primary font-bold">Tennis Club</h1>
      </Link>
      <AppNavbar />
    </header>
  )
}

export default AppHeader
