import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { Provider } from 'jotai'
import { describe, it, expect, vi } from 'vitest'

import PublicLayout from '@/layouts/PublicLayout'
import { ThemeProvider } from '@/contexts/ThemeContext'

vi.mock('@/hooks/useAuth', () => ({
  default: () => ({
    getUser: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  }),
}))

describe('PublicLayout Component', () => {
  it('should render PublicRoute with Header', () => {
    render(
      <Provider>
        <ThemeProvider>
          <HashRouter>
            <PublicLayout />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByText('Tennis Club')).toBeInTheDocument()
  })
})
