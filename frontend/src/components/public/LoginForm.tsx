import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import useLoginForm from '@/hooks/useLoginForm'
import { useState } from 'react'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { error, onSubmit } = useLoginForm(email, password)

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-xl font-semibold text-foreground">
            Log in or create account
          </h2>
          <form action={onSubmit} className="mt-6 space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="your@email.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="password"
                placeholder="**************"
                className="mt-2"
              />
            </div>
            <Button
              disabled={Boolean(error.email) || Boolean(error.password)}
              type="submit"
              className="mt-4 w-full py-2 font-medium cursor-pointer"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
