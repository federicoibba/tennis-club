import React from 'react'
import { Navigate } from 'react-router'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('token')

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />
}

export default ProtectedRoute
