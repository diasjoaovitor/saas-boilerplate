import { exec } from 'node:child_process'
import { promisify } from 'node:util'

import retry from 'async-retry'

import { auth } from '@/infra/auth'
import { API_BASE_URL } from '@/shared/constants'

const waitForAllServices = async () => {
  await retry(
    async () => {
      const response = await fetch(`${API_BASE_URL}/status`)
      if (!response.ok) {
        throw new Error('Service not ready')
      }
    },
    {
      retries: 60,
      maxTimeout: 1000,
      minTimeout: 100
    }
  )
}

const clearDatabase = async () => await promisify(exec)('pnpm run db:reset')

const signUp = async () =>
  await auth.api.signUpEmail({
    body: {
      name: 'Test',
      email: 'test@test.com',
      password: 'test1234'
    }
  })

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  signUp
}

export default orchestrator
