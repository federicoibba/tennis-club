import { HashRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/react'
import LoginForm from '../LoginForm'

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
})