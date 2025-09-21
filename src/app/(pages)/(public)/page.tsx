import { Button } from '@/app/components'

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen">
      <div className="border border-zinc-600 p-4 rounded-md ">Landing page</div>
      <Button>Click for nothing</Button>
    </div>
  )
}

export default LandingPage
