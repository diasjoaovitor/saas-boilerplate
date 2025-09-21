import { AsyncWrapper } from '@/app/components'

import { SystemStatus } from './_components'

const Status = () => {
  return (
    <>
      <h1>Status do Sistema</h1>
      <p>Monitore o status e saúde dos serviços da aplicação</p>
      <AsyncWrapper>
        <SystemStatus />
      </AsyncWrapper>
    </>
  )
}

export default Status
