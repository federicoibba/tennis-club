import { userAtom } from '@/stores'
import { useAtom } from 'jotai'
import React from 'react'
import { Navigate } from 'react-router'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [user] = useAtom(userAtom)

  return user ? <>{children}</> : <Navigate to="/" />
}

export default ProtectedRoute
