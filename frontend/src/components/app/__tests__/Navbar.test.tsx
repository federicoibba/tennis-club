// Testing libraries
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// Components and contexts
import { HashRouter } from 'react-router'
import AppNavbar from '@/components/app/Navbar'
import { ThemeProvider } from '@/contexts/ThemeContext'

// State management
import { createStore, Provider as JotaiProvider } from 'jotai'
import { userAtom } from '@/stores'
import type { User } from '@/types/user'

describe('Navbar Component', () => {
  describe('Unlogged User', () => {
    it('should render correctly when user is not logged in', () => {
      render(
        <HashRouter>
          <ThemeProvider>
            <AppNavbar />
          </ThemeProvider>
        </HashRouter>
      )

      // Check login link existence
      const loginLink = screen.getByRole('link', { name: /login/i })
      expect(loginLink).toBeInTheDocument()
    })
  })

  describe('Logged User', () => {
    // 1. Create a custom store instance
    const customStore = createStore()

    // 2. Manually set the value in the store *before* rendering
    customStore.set(userAtom, { id: 1, firstName: 'Test', email: '' } as User)

    it('should render two links correctly when user is logged in', () => {
      render(
        <HashRouter>
          <JotaiProvider store={customStore}>
            <ThemeProvider>
              <AppNavbar />
            </ThemeProvider>
          </JotaiProvider>
        </HashRouter>
      )

      const links = screen.getAllByRole('link')
      const [courtsLink, membersLink] = links

      expect(links).toHaveLength(2)

      expect(courtsLink).toHaveTextContent('Courts')
      expect(courtsLink.getAttribute('href')).toBe('#/app/courts')

      expect(membersLink).toHaveTextContent('Members')
      expect(membersLink.getAttribute('href')).toBe('#/app/members')
    })

    it('should render logout option when user is logged in', () => {
      render(
        <HashRouter>
          <JotaiProvider store={customStore}>
            <ThemeProvider>
              <AppNavbar />
            </ThemeProvider>
          </JotaiProvider>
        </HashRouter>
      )

      const logoutOption = screen.getByText(/logout/i)
      expect(logoutOption).toBeInTheDocument()
    })

    it('should successfully logout the user on clicking logout', async () => {
      render(
        <HashRouter>
          <JotaiProvider store={customStore}>
            <ThemeProvider>
              <AppNavbar />
            </ThemeProvider>
          </JotaiProvider>
        </HashRouter>
      )

      const logoutOption = screen.getByTestId('logout-cta')
      expect(logoutOption).toBeInTheDocument()

      // Simulate click
      await userEvent.click(logoutOption)
      expect(logoutOption).not.toBeInTheDocument()
    })
  })
})
