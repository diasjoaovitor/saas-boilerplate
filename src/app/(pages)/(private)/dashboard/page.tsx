'use client'

import { redirect } from 'next/navigation'

import { Loader } from '@/app/components'
import { signOut, useSession } from '@/infra/auth-client'

const Dashboard = () => {
  const { data: session, isPending } = useSession()

  if (isPending) {
    return <Loader />
  }

  if (!session) {
    return redirect('/')
  }

  return (
    <div>
      <p>Hello {session.user.name}</p>
      <button onClick={async () => await signOut()}>Sign Out</button>
    </div>
  )
}

export default Dashboard
