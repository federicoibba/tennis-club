// Layout for private routes

import React from 'react'
import ProtectedRoute from '@/components/reserved/ProtectedRoute'
import { Outlet } from 'react-router'

const PrivateLayout: React.FC = () => {
  return (
    <ProtectedRoute>
      <div>
        <Outlet />
      </div>
    </ProtectedRoute>
  )
}

export default PrivateLayout
