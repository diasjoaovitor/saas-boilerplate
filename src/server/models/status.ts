import { TStatus } from '@/shared/types'

import statusRepository from '../repositories/status'

const check = async () => {
  const updatedAt = new Date().toISOString()

  const server_version = await statusRepository.getVersion()
  const max_connections = await statusRepository.getMaxConnections()
  const count = await statusRepository.getOpenedConnections()

  const status: TStatus = {
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: server_version,
        max_connections,
        opened_connections: count
      }
    }
  }

  return status
}

const status = {
  check
}

export default status
