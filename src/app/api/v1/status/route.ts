import { NextResponse } from 'next/server'

import controller from '@/infra/controller'
import status from '@/server/models/status'

const getHandler = async () => {
  const body = await status.check()

  return NextResponse.json(body, {
    status: 200
  })
}

export const { GET, DELETE, HEAD, OPTIONS, PATCH, POST, PUT } =
  controller.handle({
    GET: getHandler
  })
