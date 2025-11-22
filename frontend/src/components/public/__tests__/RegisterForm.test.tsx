import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { describe, it, expect } from 'vitest'

import RegisterForm from '@/components/public/RegisterForm'

describe('RegisterForm Component', () => {
  it('should render the registration form', () => {
    render(
      <HashRouter>
        <RegisterForm />
      </HashRouter>
    )

    expect(screen.getByText('Create new account')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument()
    expect(screen.getByLabelText('Sign up to our newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('should render link to login page', () => {
    render(
      <HashRouter>
        <RegisterForm />
      </HashRouter>
    )

    const loginLink = screen.getByRole('link', { name: /sign in/i })
    expect(loginLink).toBeInTheDocument()
    expect(loginLink).toHaveAttribute('href', '#/login')
  })
})
