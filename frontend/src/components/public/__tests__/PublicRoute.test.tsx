import { render, screen } from '@testing-library/react'
import PublicRoute from '../PublicRoute'
import { createStore, Provider as JotaiProvider } from 'jotai'
import { userAtom } from '@/stores'
import type { User } from '@/types/user'
import { HashRouter } from 'react-router'

describe('PublicRoute Component', () => {
  const userStore = createStore()

  it('should render children for public route', () => {
    userStore.set(userAtom, null)

    render(
      <JotaiProvider store={userStore}>
        <PublicRoute>
          <div>Public Content</div>
        </PublicRoute>
      </JotaiProvider>
    )

    expect(screen.getByText('Public Content')).toBeInTheDocument()
  })

  it('should redirect to /app for logged-in user', () => {
    userStore.set(userAtom, { id: 1, firstName: 'Test', email: '' } as User)

    render(
      <HashRouter>
        <JotaiProvider store={userStore}>
          <PublicRoute>
            <div>Public Content</div>
          </PublicRoute>
        </JotaiProvider>
      </HashRouter>
    )

    expect(screen.queryByText('Public Content')).toBeNull()
    expect(window.location.hash).toBe('#/app')
  })
})
