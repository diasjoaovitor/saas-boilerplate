import { Suspense } from 'react'

import { Loader } from '@/app/components'

import { Info } from './_components'

const Status = () => {
  return (
    <div>
      <h1>Status do Sistema</h1>
      <p>Monitore o status e saúde dos serviços da aplicação</p>
      <Suspense fallback={<Loader />}>
        <Info />
      </Suspense>
    </div>
  )
}

export default Status
