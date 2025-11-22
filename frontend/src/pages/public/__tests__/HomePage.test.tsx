import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import HomePage from '@/pages/public/HomePage'

describe('HomePage Component', () => {
  it('should render welcome message', () => {
    render(<HomePage />)

    expect(screen.getByText('Welcome to the Tennis Club!')).toBeInTheDocument()
  })

  it('should render club features list', () => {
    render(<HomePage />)

    expect(screen.getByText(/Beautifully maintained courts/i)).toBeInTheDocument()
    expect(screen.getByText(/Coaching and training sessions/i)).toBeInTheDocument()
    expect(screen.getByText(/Social events, tournaments, and leagues/i)).toBeInTheDocument()
    expect(screen.getByText(/Modern clubhouse and relaxing lounge/i)).toBeInTheDocument()
  })

  it('should render invitation text', () => {
    render(<HomePage />)

    expect(
      screen.getByText(/Join us today for fun, fitness, and friendly competition!/i)
    ).toBeInTheDocument()
  })
})
