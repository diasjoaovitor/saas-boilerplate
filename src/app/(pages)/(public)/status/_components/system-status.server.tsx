import statusModel from '@/server/models/status'

export const SystemStatus = async () => {
  const status = await statusModel.check()

  return <pre>{JSON.stringify(status, null, 2)}</pre>
}
