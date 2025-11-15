import React from 'react'
import { Link } from 'react-router'

import Button from '@/components/ui/Button'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full gap-4 items-center">
      <img className="max-w-1/2" src="https://http.dog/404.jpg" alt="Page not found" />
      <Link to="/">
        <Button className="cursor-pointer">Go back home</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
