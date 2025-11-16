import { useNavigate } from 'react-router'
import useAuth from './useAuth'
import { useState } from 'react'

interface LoginForm {
  error: {
    username: boolean
    password: boolean
    login: boolean
  }
  onSubmit: () => void
}

const useLoginForm = (username: string, password: string): LoginForm => {
  const [loginError, setLoginError] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth(username, password)

  // Errors
  const isUsernameError = !username || username.length < 3
  const isPasswordError = !password

  // Submit action
  const onSubmit = async () => {
    if (!isUsernameError && !isPasswordError) {
      setLoginError(false)

      const user = await login(username, password)

      if (!user) {
        setLoginError(true)
      } else {
        sessionStorage.setItem('token', user.accessToken)
        navigate('/app')
      }
    }
  }

  return {
    onSubmit,
    error: {
      username: isUsernameError,
      password: isPasswordError,
      login: loginError,
    },
  }
}

export default useLoginForm
