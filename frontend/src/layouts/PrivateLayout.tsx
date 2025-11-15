// Layout for private routes

import ProtectedRoute from '@/components/reserved/ProtectedRoute'
import { Outlet } from 'react-router'

const PrivateLayout = () => {
  return (
    <ProtectedRoute>
      <div>
        <Outlet />
      </div>
    </ProtectedRoute>
  )
}

export default PrivateLayout
