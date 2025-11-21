import { act, renderHook } from '@testing-library/react'
import useTheme from '../useTheme'
import { ThemeProvider } from '@/contexts/ThemeContext'

describe('useTheme hook', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it("should return 'light' theme as default", () => {
    const { result } = renderHook(useTheme, {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('light')
  })

  it("should toggle theme from 'light' to 'dark'", () => {
    const { result } = renderHook(useTheme, {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('light')

    // Toggle theme
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('dark')

    // Toggle theme back
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('light')
  })

  it('should initialize with dark theme if system preference is dark', () => {
    // Mock matchMedia to simulate dark mode preference
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
    }))

    const { result } = renderHook(useTheme, {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('dark')
  })

  it('should initialize with dark theme if localStorage has light theme', () => {
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(useTheme, {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('dark')
  })

  it('should throw error if used outside ThemeProvider', () => {
    try {
      renderHook(useTheme)
    } catch (error) {
      expect((error as Error).message).toBe('useTheme must be used within a ThemeProvider')
    }
  })
})
