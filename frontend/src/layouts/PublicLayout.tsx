import React from 'react'
import { Outlet } from 'react-router'
import { Fragment } from 'react/jsx-runtime'

import AppHeader from '@/components/app/Header'

const PublicLayout: React.FC = () => {
  return (
    <Fragment>
      <AppHeader />
      <div className='flex flex-col h-full w-full p-8'>
        <Outlet />
      </div>
    </Fragment>
  )
}

export default PublicLayout
