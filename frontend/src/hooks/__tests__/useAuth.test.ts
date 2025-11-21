import { renderHook } from '@testing-library/react'
import useAuth from '../useAuth'

describe('useAuth hook', () => {
  beforeEach(() => {
    window.fetch = fetch
    sessionStorage.clear()
  })

  describe('getUser', () => {
    it('should return null when no token is present', async () => {
      const { result } = renderHook(() => useAuth())

      await expect(result.current.getUser()).resolves.toBeNull()
    })

    it('should return null and remove token when status is not 200', async () => {
      sessionStorage.setItem('token', 'invalid-token')

      window.fetch = vi.fn().mockResolvedValue({
        status: 401,
      })

      const { result } = renderHook(() => useAuth())

      await expect(result.current.getUser()).resolves.toBeNull()
      expect(sessionStorage.getItem('token')).toBeNull()
    })

    it('should return user data when token is valid', async () => {
      const mockUserData = {
        id: 1,
        firstName: 'Test',
        lastName: 'User',
        email: '',
        username: 'testuser',
        image: '',
      }

      sessionStorage.setItem('token', 'valid-token')

      window.fetch = vi.fn().mockResolvedValue({
        status: 200,
        json: async () => mockUserData,
      })

      const { result } = renderHook(() => useAuth())

      await expect(result.current.getUser()).resolves.toEqual(mockUserData)
    })
  })

  describe('login', () => {
    it('should fail when status is not 200', async () => {
      window.fetch = vi.fn().mockResolvedValue({
        status: 401,
      })

      const { result } = renderHook(() => useAuth())
      await expect(result.current.login('wronguser', 'wrongpassword')).resolves.toBeNull()
    })

    it('should return user data when login is successful', async () => {
      const mockResponse = {
        id: 1,
        firstName: 'Test',
        lastName: 'User',
        email: '',
      }

      window.fetch = vi.fn().mockResolvedValue({
        status: 200,
        json: async () => mockResponse,
      })

      const { result } = renderHook(() => useAuth())
      await expect(result.current.login('correctuser', 'correctpassword')).resolves.toEqual(
        mockResponse
      )
    })
  })

  it('register - resolve the promise when is called', async () => {
    const { result } = renderHook(() => useAuth())

    await expect(result.current.register('newuser', 'password123')).resolves.toBeUndefined()
  })
})
