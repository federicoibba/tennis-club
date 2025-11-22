import { render, screen, waitFor } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { Provider } from 'jotai'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import App from '@/App'
import { ThemeProvider } from '@/contexts/ThemeContext'
import * as useAuthModule from '@/hooks/useAuth'

vi.mock('@/hooks/useAuth')

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render loading screen initially', () => {
    const mockGetUser = vi.fn().mockResolvedValue(null)
    vi.spyOn(useAuthModule, 'default').mockReturnValue({
      getUser: mockGetUser,
      login: vi.fn(),
      logout: vi.fn(),
    })

    render(
      <Provider>
        <ThemeProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render app router after loading', async () => {
    const mockGetUser = vi.fn().mockResolvedValue(null)
    vi.spyOn(useAuthModule, 'default').mockReturnValue({
      getUser: mockGetUser,
      login: vi.fn(),
      logout: vi.fn(),
    })

    render(
      <Provider>
        <ThemeProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    )

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    expect(mockGetUser).toHaveBeenCalledTimes(1)
  })

  it('should set user when getUser returns a user', async () => {
    const mockUser = { id: '1', username: 'testuser', name: 'Test User' }
    const mockGetUser = vi.fn().mockResolvedValue(mockUser)
    vi.spyOn(useAuthModule, 'default').mockReturnValue({
      getUser: mockGetUser,
      login: vi.fn(),
      logout: vi.fn(),
    })

    render(
      <Provider>
        <ThemeProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    )

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    expect(mockGetUser).toHaveBeenCalledTimes(1)
  })
})
