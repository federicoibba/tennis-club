import React from 'react'
import { Link, useNavigate } from 'react-router'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useAtom } from 'jotai'
import { userAtom } from '@/stores'

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
