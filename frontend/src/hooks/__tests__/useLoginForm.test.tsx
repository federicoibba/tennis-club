import { act, renderHook } from '@testing-library/react'
import useLoginForm from '../useLoginForm'
import { HashRouter } from 'react-router'
import { Provider } from 'jotai'

const mockLogin = vi.fn((_: string, password: string) => {
  if (password === 'invalid-password') {
    return Promise.resolve(null)
  }
  return Promise.resolve({ id: 1, username: 'valid-username', name: 'Valid User', accessToken: 'valid-token' })
})

vi.mock('../useAuth', () => ({
  __esModule: true,
  default: () => ({
    login: mockLogin,
  }),
}))

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider>
    <HashRouter>{children}</HashRouter>
  </Provider>
)

describe('useLoginForm Hook', () => {
  it('returns username error when username is invalid', () => {
    const { result } = renderHook(() => useLoginForm('', 'valid-password'), {
      wrapper,
    })

    expect(result.current.error.username).toBe(true)
  })

  it('returns password error when password is empty', () => {
    const { result } = renderHook(() => useLoginForm('valid-username', ''), {
      wrapper,
    })

    expect(result.current.error.password).toBe(true)
  })

  it('does not return errors when inputs are valid', () => {
    const { result } = renderHook(() => useLoginForm('valid-username', 'valid-password'), {
      wrapper,
    })

    expect(result.current.error.username).toBe(false)
    expect(result.current.error.password).toBe(false)
  })

  it('sets login error when login fails', async () => {
    const { result } = renderHook(() => useLoginForm('valid-username', 'invalid-password'), {
      wrapper,
    })

    await act(() => {
      return result.current.onSubmit()
    })

    expect(result.current.error.login).toBe(true)
  })

  it('does not set login error when login succeeds', async () => {
    const { result } = renderHook(() => useLoginForm('valid-username', 'valid-password'), {
      wrapper,
    })

    await act(() => {
      return result.current.onSubmit()
    })

    expect(result.current.error.login).toBe(false)
    expect(sessionStorage.getItem('token')).toBe('valid-token')
  })
})
