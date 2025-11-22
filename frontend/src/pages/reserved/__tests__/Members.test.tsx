import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import MembersPage from '@/pages/reserved/Members'

describe('MembersPage Component', () => {
  it('should render members page heading', () => {
    render(<MembersPage />)

    expect(screen.getByRole('heading', { name: /members page/i })).toBeInTheDocument()
  })
})
