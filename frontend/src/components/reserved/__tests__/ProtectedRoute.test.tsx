import { createStore, Provider as JotaiProvider } from 'jotai'
import { HashRouter } from 'react-router'
import { screen, render } from '@testing-library/react'

import { userAtom } from '@/stores'
import ProtectedRoute from '../ProtectedRoute'
import type { User } from '@/types/user'

describe('ProtectedRoute Component', () => {
  const userStore = createStore()

  it('should render children when user is authenticated', () => {
    userStore.set(userAtom, { id: 1, firstName: 'Test', email: '' } as User)
    render(
      <HashRouter>
        <JotaiProvider store={userStore}>
          <ProtectedRoute>
            <div>Protected Content</div>
          </ProtectedRoute>
        </JotaiProvider>
      </HashRouter>
    )

    expect(screen.getByText('Protected Content')).toBeInTheDocument()
  })

  it('should redirect to login when user is not authenticated', () => {
    render(
      <HashRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </HashRouter>
    )

    expect(screen.queryByText('Protected Content')).toBeNull()
    expect(window.location.hash).toBe('#/')
  })
})
