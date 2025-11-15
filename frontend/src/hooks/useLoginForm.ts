import { isEmailValid } from '@/utils/login'
import { useNavigate } from 'react-router'

interface LoginForm {
  error: {
    email: boolean
    password: boolean
  }
  onSubmit: () => void
}

const useLoginForm = (email: string, password: string): LoginForm => {
  const navigate = useNavigate()

  // Errors
  const isEmailError = isEmailValid(email)
  const isPasswordError = !password

  // Submit action
  const onSubmit = () => {
    if (!isEmailError && !isPasswordError) {
      localStorage.setItem('token', `${email}:${btoa(password)}`)
      navigate('/app')
    }
  }

  return {
    onSubmit,
    error: {
      email: isEmailError,
      password: isPasswordError,
    },
  }
}

export default useLoginForm
