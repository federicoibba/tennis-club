import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('token')

  return isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoute
