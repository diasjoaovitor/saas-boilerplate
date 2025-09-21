import prisma from '@/infra/prisma'

const getVersion = async (): Promise<string> => {
  const result = await prisma.$queryRaw<[{ server_version: string }]>`
    SHOW server_version;
  `
  return result[0].server_version
}

const getMaxConnections = async (): Promise<string> => {
  const result = await prisma.$queryRaw<[{ max_connections: string }]>`
    SHOW max_connections;
  `
  return result[0].max_connections
}

const getOpenedConnections = async (): Promise<number> => {
  const databaseName = process.env.POSTGRES_DB as string
  const result = await prisma.$queryRaw<[{ count: bigint }]>`
    SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = ${databaseName};
  `
  return Number(result[0].count)
}

const statusRepository = {
  getVersion,
  getMaxConnections,
  getOpenedConnections
}

export default statusRepository
