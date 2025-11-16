import React from 'react'
import { Outlet } from 'react-router'

import AppHeader from '@/components/app/Header'
import PublicRoute from '@/components/public/PublicRoute'

const PublicLayout: React.FC = () => {
  return (
    <PublicRoute>
      <AppHeader />
      <div className="flex flex-col h-full w-full p-8">
        <Outlet />
      </div>
    </PublicRoute>
  )
}

export default PublicLayout
