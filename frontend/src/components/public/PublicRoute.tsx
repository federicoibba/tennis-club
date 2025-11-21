import { userAtom } from '@/stores'
import { useAtomValue } from 'jotai'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router'

interface PublicRouteProps {
  children: ReactNode
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const user = useAtomValue(userAtom)
  const isAuthenticated = user !== null

  return isAuthenticated ? <Navigate to="/app" /> : <>{children}</>
}

export default PublicRoute
