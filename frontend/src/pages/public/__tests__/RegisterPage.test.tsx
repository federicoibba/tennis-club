import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { describe, it, expect } from 'vitest'

import RegisterPage from '@/pages/public/RegisterPage'

describe('RegisterPage Component', () => {
  it('should render RegisterForm', () => {
    render(
      <HashRouter>
        <RegisterPage />
      </HashRouter>
    )

    expect(screen.getByText('Create new account')).toBeInTheDocument()
  })
})
