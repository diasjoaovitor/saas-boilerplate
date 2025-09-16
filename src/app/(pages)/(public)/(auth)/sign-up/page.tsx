'use client'

import { redirect, useRouter } from 'next/navigation'

import { Loader } from '@/app/components'
import { signUp, useSession } from '@/infra/auth-client'

const SignUp = () => {
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
          await signUp.email(
            {
              email: 'test@test.com',
              password: 'test1234',
              name: 'Test'
            },
            {
              onSuccess: () => {
                router.push('/dashboard')
              }
            }
          )
        }
      >
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
