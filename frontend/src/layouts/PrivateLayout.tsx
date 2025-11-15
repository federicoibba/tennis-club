import React from 'react'
import { Outlet } from 'react-router'

import AppHeader from '@/components/app/Header'
import ProtectedRoute from '@/components/reserved/ProtectedRoute'

const PrivateLayout: React.FC = () => {
  return (
    <ProtectedRoute>
      <AppHeader />
      <div className="flex flex-col h-full w-full p-8">
        <Outlet />
      </div>
    </ProtectedRoute>
  )
}

export default PrivateLayout
