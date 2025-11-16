import React, { useEffect, useState } from 'react'
import { useSetAtom } from 'jotai'
import AppRouter from '@/AppRouter'
import useAuth from '@/hooks/useAuth'
import { userAtom } from '@/stores'
import LoadingScreen from '@/components/ui/LoadingScreen'

const App: React.FC = () => {
  const { getUser } = useAuth()
  const setUser = useSetAtom(userAtom)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true)
      const user = await getUser()

      setUser(user ?? null)
      setIsLoading(false)
    }

    initializeAuth()
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="bg-background flex flex-col h-full w-full">
      <AppRouter />
    </div>
  )
}

export default App
