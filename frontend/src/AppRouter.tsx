import { Route, Routes } from 'react-router'

// Pages
import AppPage from '@/pages/reserved/app'
import HomePage from '@/pages/public/home'

// Layouts
import PublicLayout from '@/layouts/PublicLayout'
import PrivateLayout from '@/layouts/PrivateLayout'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />} path="/">
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<PrivateLayout />} path="/app">
        <Route index element={<AppPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
