import React from 'react'
import AppRouter from '@/AppRouter'

const App: React.FC = () => {
  return (
    <div className="bg-background flex flex-col h-full w-full">
      <AppRouter />
    </div>
  )
}

export default App
