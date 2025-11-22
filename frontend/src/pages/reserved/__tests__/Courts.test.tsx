import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import CourtsPage from '@/pages/reserved/Courts'

describe('CourtsPage Component', () => {
  it('should render courts page heading', () => {
    render(<CourtsPage />)

    expect(screen.getByRole('heading', { name: /courts page/i })).toBeInTheDocument()
  })
})
