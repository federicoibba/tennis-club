import React from 'react'
import { useAtom } from 'jotai'
import { Link, useNavigate } from 'react-router'

import { userAtom } from '@/stores'
import AppThemeToggle from '@/components/app/ThemeToggle'

const AppHeader: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useAtom(userAtom)

  const onLogout = () => {
    sessionStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="flex items-center gap-4">
      <ul className="flex flex-row items-center gap-4 [&>li]:cursor-pointer">
        {user ? (
          <>
            <li>
              <Link to="/app/courts">Courts</Link>
            </li>
            <li>
              <Link to="/app/members">Members</Link>
            </li>
            <li data-testid="logout-cta" onClick={onLogout}>
              Logout
            </li>
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
      <AppThemeToggle />
    </nav>
  )
}

export default AppHeader
