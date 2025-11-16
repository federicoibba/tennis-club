import type { User } from '@/types/user'
import type { LoginResponse } from '@/types/auth'

interface UseAuth {
  login: (username: string, password: string) => Promise<LoginResponse | null>
  register: (username: string, password: string) => Promise<void>
  getUser: () => Promise<User | null>
}

const useAuth = (): UseAuth => {
  const getUser = async () => {
    const token = sessionStorage.getItem('token')

    if (!token) return null

    const request = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (request.status !== 200) {
      sessionStorage.removeItem('token')
      return null
    }

    const userData = (await request.json()) as LoginResponse

    return {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      username: userData.username,
      image: userData.image,
    } as User
  }

  // The list of authenticated users is here: https://dummyjson.com/users
  const login = async (username: string, password: string) => {
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


  return { login, register, getUser }
}

export default useAuth
