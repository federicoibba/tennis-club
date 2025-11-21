import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ThemeToggle from '@/components/app/ThemeToggle'
import { ThemeProvider } from '@/contexts/ThemeContext'

describe('Theme Toggle Component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('aria-label')).toBe('Switch to dark mode')
  })

  it('should change to dark mode on click', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    const button = screen.getByRole('button')

    await userEvent.click(button)
    expect(button.getAttribute('aria-label')).toBe('Switch to light mode')
  })
})
