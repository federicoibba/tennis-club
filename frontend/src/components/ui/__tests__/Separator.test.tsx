import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Separator from '@/components/ui/Separator'

describe('Separator Component', () => {
  it('should render horizontal separator by default', () => {
    const { container } = render(<Separator />)

    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveAttribute('data-orientation', 'horizontal')
  })

  it('should render vertical separator', () => {
    const { container } = render(<Separator orientation="vertical" />)

    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveAttribute('data-orientation', 'vertical')
  })

  it('should apply custom className', () => {
    const { container } = render(<Separator className="custom-class" />)

    const separator = container.querySelector('.custom-class')
    expect(separator).toBeInTheDocument()
  })

  it('should be decorative by default', () => {
    const { container } = render(<Separator />)

    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it('should not be decorative when decorative is false', () => {
    const { container } = render(<Separator decorative={false} />)

    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).not.toHaveAttribute('aria-hidden', 'true')
  })
})
