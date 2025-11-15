export const isEmailValid = (email: string): boolean => {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return true
  }

  return false
}
