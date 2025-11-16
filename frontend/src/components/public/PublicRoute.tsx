import type { ReactNode } from 'react'
import { Navigate } from 'react-router'

interface PublicRouteProps {
  children: ReactNode
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('token')

  return isAuthenticated ? <Navigate to="/app" /> : <>{children}</>
}

export default PublicRoute
