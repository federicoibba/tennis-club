import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import AppPage from '@/pages/reserved/AppPage'

describe('AppPage Component', () => {
  it('should render app page heading', () => {
    render(<AppPage />)

    expect(screen.getByRole('heading', { name: /app page/i })).toBeInTheDocument()
  })
})
