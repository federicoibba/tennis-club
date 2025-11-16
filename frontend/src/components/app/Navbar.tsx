import React from 'react'
import { Link, useNavigate } from 'react-router'
import ThemeToggle from '@/components/ui/ThemeToggle'

const AppHeader: React.FC = () => {
  const navigate = useNavigate()

  const token = sessionStorage.getItem('token')
  const onLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="flex items-center gap-4">
      <ul className="flex flex-row items-center gap-4 [&>li]:cursor-pointer">
        {token ? (
          <>
            <li onClick={onLogout}>Logout</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/register">Register</Link>
            </li> */}
          </>
        )}
      </ul>
      <ThemeToggle />
    </nav>
  )
}

export default AppHeader
