import React from 'react'
import { Route, Routes } from 'react-router'

// Public Pages
import HomePage from '@/pages/public/HomePage'
import LoginPage from '@/pages/public/LoginPage'
import NotFoundPage from '@/pages/public/NotFoundPage'
// import RegisterPage from '@/pages/public/RegisterPage'

// Private pages
import AppPage from '@/pages/reserved/AppPage'
import CourtsPage from '@/pages/reserved/Courts'
import MembersPage from '@/pages/reserved/Members'

// Layouts
import PublicLayout from '@/layouts/PublicLayout'
import PrivateLayout from '@/layouts/PrivateLayout'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />} path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* 404 handler - nested under PublicLayout */}
        {/* TODO remove public layout from NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<PrivateLayout />} path="app">
        <Route index element={<AppPage />} />
        <Route path='courts' element={<CourtsPage />} />
        <Route path='members' element={<MembersPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
