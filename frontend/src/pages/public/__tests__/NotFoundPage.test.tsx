import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router'
import { describe, it, expect } from 'vitest'

import NotFoundPage from '@/pages/public/NotFoundPage'

describe('NotFoundPage Component', () => {
  it('should render 404 image', () => {
    render(
      <HashRouter>
        <NotFoundPage />
      </HashRouter>
    )

    const image = screen.getByAltText('Page not found')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://http.dog/404.jpg')
  })

  it('should render go back home button', () => {
    render(
      <HashRouter>
        <NotFoundPage />
      </HashRouter>
    )

    const button = screen.getByRole('button', { name: /go back home/i })
    expect(button).toBeInTheDocument()
  })

  it('should have link to home page', () => {
    render(
      <HashRouter>
        <NotFoundPage />
      </HashRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#/')
  })
})
