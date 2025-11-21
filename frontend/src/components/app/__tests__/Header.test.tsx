import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import '@testing-library/jest-dom'

import AppHeader from '@/components/app/Header'
import { ThemeProvider } from '@/contexts/ThemeContext'

describe('Header Component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <HashRouter>
          <AppHeader />
        </HashRouter>
      </ThemeProvider>
    )

    expect(screen.getByText('Tennis Club')).toBeInTheDocument()
  })

  it('should redirect to home on title click', () => {
    render(
      <ThemeProvider>
        <HashRouter>
          <AppHeader />
        </HashRouter>
      </ThemeProvider>
    )

    const titleLink = screen.getByRole('link', { name: /tennis club/i })
    expect(titleLink).toHaveAttribute('href', '#/')
  })
})
