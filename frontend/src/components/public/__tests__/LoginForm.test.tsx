import { HashRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import { screen, render, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import LoginForm from '../LoginForm'

const mockLogin = vi.fn()

vi.mock('@/hooks/useAuth', () => ({
  default: () => ({
    getUser: vi.fn(),
    login: mockLogin,
    logout: vi.fn(),
  }),
}))

describe('Login Form Component', () => {
  it('should render the login form with the submit button disabled', () => {
    render(
      <HashRouter>
        <LoginForm />
      </HashRouter>
    )

    const submitButton = screen.getByRole('button', { name: /sign in/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  it("should enable submit button when username and password are filled", async () => {
    render(
      <HashRouter>
        <LoginForm />
      </HashRouter>
    )

    const usernameInput = screen.getByLabelText(/username/i)
    await userEvent.type(usernameInput, 'testuser')

    const passwordInput = screen.getByLabelText(/password/i)
    await userEvent.type(passwordInput, 'testpassword')

    const submitButton = screen.getByRole('button', { name: /sign in/i })
    expect(submitButton).toBeEnabled()
  })

  it('should display error message on failed login', async () => {
    mockLogin.mockResolvedValue(null)

    render(
      <HashRouter>
        <LoginForm />
      </HashRouter>
    )

    const usernameInput = screen.getByLabelText(/username/i)
    await userEvent.type(usernameInput, 'testuser')

    const passwordInput = screen.getByLabelText(/password/i)
    await userEvent.type(passwordInput, 'password123')

    const submitButton = screen.getByRole('button', { name: /sign in/i })
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText(/Something went wrong during the login/i)
      ).toBeInTheDocument()
    })
  })
})