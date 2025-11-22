import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { Provider, createStore } from 'jotai'
import { describe, it, expect, vi } from 'vitest'

import PrivateLayout from '@/layouts/PrivateLayout'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { userAtom } from '@/stores'

vi.mock('@/hooks/useAuth', () => ({
  default: () => ({
    getUser: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  }),
}))

describe('PrivateLayout Component', () => {
  it('should render ProtectedRoute with Header when authenticated', () => {
    const store = createStore()
    store.set(userAtom, { id: '1', username: 'testuser', name: 'Test User' })

    render(
      <Provider store={store}>
        <ThemeProvider>
          <HashRouter>
            <PrivateLayout />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByText('Tennis Club')).toBeInTheDocument()
  })
})
