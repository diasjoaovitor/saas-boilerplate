'use client'

import { redirect, useRouter } from 'next/navigation'

import { Loader } from '@/app/components'
import { signIn, useSession } from '@/infra/auth-client'

const SignIn = () => {
  const router = useRouter()

  const { data: session, isPending } = useSession()

  if (isPending) {
    return <Loader />
  }

  if (session) {
    return redirect('/dashboard')
  }

  return (
    <div>
      <button
        onClick={async () =>
          await signIn.email(
            {
              email: 'test@test.com',
              password: 'test1234'
            },
            {
              onSuccess: () => {
                router.push('/dashboard')
              }
            }
          )
        }
      >
        Sign In
      </button>
    </div>
  )
}

export default SignIn
