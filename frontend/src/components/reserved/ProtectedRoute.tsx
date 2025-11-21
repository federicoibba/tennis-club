import React from 'react'
import { useAtomValue } from 'jotai'
import { Navigate } from 'react-router'
import { userAtom } from '@/stores'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user= useAtomValue(userAtom)
  const isAuthenticated = user !== null

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />
}

export default ProtectedRoute
