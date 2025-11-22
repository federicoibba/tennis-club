import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import LoadingScreen from '@/components/ui/LoadingScreen'

describe('LoadingScreen Component', () => {
  it('should render loading screen with default text', () => {
    render(<LoadingScreen />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<LoadingScreen className="custom-class" />)

    const loadingDiv = container.querySelector('.custom-class')
    expect(loadingDiv).toBeInTheDocument()
  })
})
