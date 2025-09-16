import statusModel from '@/server/models/status'

export const Info = async () => {
  const status = await statusModel.check()

  return (
    <div>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  )
}
