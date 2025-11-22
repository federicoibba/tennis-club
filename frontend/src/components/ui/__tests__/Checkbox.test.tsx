import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

import Checkbox from '@/components/ui/Checkbox'

describe('Checkbox Component', () => {
  it('should render checkbox', () => {
    render(<Checkbox aria-label="test-checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('should handle checked state', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(<Checkbox aria-label="test-checkbox" onCheckedChange={handleChange} />)

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(handleChange).toHaveBeenCalled()
  })

  it('should apply custom className', () => {
    render(<Checkbox className="custom-class" aria-label="test-checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('custom-class')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Checkbox disabled aria-label="test-checkbox" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })
})
