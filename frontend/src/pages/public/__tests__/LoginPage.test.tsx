import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { Provider } from 'jotai'
import { describe, it, expect, vi } from 'vitest'

import LoginPage from '@/pages/public/LoginPage'

vi.mock('@/hooks/useAuth', () => ({
  default: () => ({
    getUser: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  }),
}))

describe('LoginPage Component', () => {
  it('should render LoginForm', () => {
    render(
      <Provider>
        <HashRouter>
          <LoginPage />
        </HashRouter>
      </Provider>
    )

    expect(screen.getByText('Log in or create account')).toBeInTheDocument()
  })
})
