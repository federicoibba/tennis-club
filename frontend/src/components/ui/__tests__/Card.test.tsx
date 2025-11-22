import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/ui/Card'

describe('Card Components', () => {
  it('should render Card component', () => {
    render(<Card data-testid="card">Card Content</Card>)

    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveAttribute('data-slot', 'card')
  })

  it('should render CardHeader component', () => {
    render(<CardHeader data-testid="card-header">Header Content</CardHeader>)

    const header = screen.getByTestId('card-header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveAttribute('data-slot', 'card-header')
  })

  it('should render CardTitle component', () => {
    render(<CardTitle data-testid="card-title">Title</CardTitle>)

    const title = screen.getByTestId('card-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveAttribute('data-slot', 'card-title')
  })

  it('should render CardDescription component', () => {
    render(<CardDescription data-testid="card-description">Description</CardDescription>)

    const description = screen.getByTestId('card-description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveAttribute('data-slot', 'card-description')
  })

  it('should render CardAction component', () => {
    render(<CardAction data-testid="card-action">Action</CardAction>)

    const action = screen.getByTestId('card-action')
    expect(action).toBeInTheDocument()
    expect(action).toHaveAttribute('data-slot', 'card-action')
  })

  it('should render CardContent component', () => {
    render(<CardContent data-testid="card-content">Content</CardContent>)

    const content = screen.getByTestId('card-content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveAttribute('data-slot', 'card-content')
  })

  it('should render CardFooter component', () => {
    render(<CardFooter data-testid="card-footer">Footer</CardFooter>)

    const footer = screen.getByTestId('card-footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveAttribute('data-slot', 'card-footer')
  })

  it('should apply custom className to Card', () => {
    render(<Card className="custom-class" data-testid="card">Content</Card>)

    const card = screen.getByTestId('card')
    expect(card).toHaveClass('custom-class')
  })
})
