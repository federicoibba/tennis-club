import React from 'react'
import { Link } from 'react-router'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <img className="max-w-1/2" src="https://http.dog/404.jpg" alt="Page not found" />
      <Link to="/">
        <button className='cursor-pointer'>Go back home</button>
      </Link>
    </div>
  )
}

export default NotFoundPage
