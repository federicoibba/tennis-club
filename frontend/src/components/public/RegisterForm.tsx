import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import { Card, CardContent } from '@/components/ui/Card'
import { Link } from 'react-router'

const RegisterForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h3 className="mt-2 text-center text-lg font-bold text-foreground dark:text-foreground">
            Create new account 
          </h3>
        </div>

        <Card className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <CardContent>
            <form action="#" method="post" className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground dark:text-foreground"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  className="mt-2"
                />
              </div>

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
                  autoComplete="email"
                  placeholder="ephraim@blocks.so"
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
                  autoComplete="password"
                  placeholder="Password"
                  className="mt-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="confirm-password"
                  className="text-sm font-medium text-foreground dark:text-foreground"
                >
                  Confirm password
                </Label>
                <Input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  autoComplete="confirm-password"
                  placeholder="Password"
                  className="mt-2"
                />
              </div>

              <div className="mt-2 flex items-start">
                <div className="flex h-6 items-center">
                  <Checkbox
                    id="newsletter"
                    name="newsletter"
                    className="size-4"
                  />
                </div>
                <Label
                  htmlFor="newsletter"
                  className="ml-3 text-sm leading-6 text-muted-foreground dark:text-muted-foreground"
                >
                  Sign up to our newsletter
                </Label>
              </div>

              <Button type="submit" className="mt-4 w-full py-2 font-medium">
                Create account
              </Button>

              <p className="text-center text-xs text-muted-foreground dark:text-muted-foreground">
                By signing in, you agree to our{' '}
                <a
                  href="#"
                  className="capitalize text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
                >
                  Terms of use
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="capitalize text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
                >
                  Privacy policy
                </a>
              </p>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground dark:text-muted-foreground">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
