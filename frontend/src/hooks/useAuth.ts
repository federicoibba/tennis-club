import type { LoginResponse } from '@/types/auth'

interface UseAuth {
  login: (username: string, password: string) => Promise<LoginResponse | null>
  register: (username: string, password: string) => Promise<void>
}

const useAuth = (username: string, password: string): UseAuth => {
  // The list of authenticated users is here: https://dummyjson.com/users
  const login = async () => {
    const request = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    if (request.status !== 200) {
      return null
    }

    return (await request.json()) as LoginResponse
  }

  const register = async (): Promise<void> => {
    return Promise.resolve()
  }

  return { login, register }
}

export default useAuth
