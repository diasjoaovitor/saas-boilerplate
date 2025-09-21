import { HTTP_METHOD, HTTP_METHODS } from 'next/dist/server/web/http'
import { NextRequest, NextResponse } from 'next/server'

import { InternalServerError, MethodNotAllowedError } from './errors'

type THandler = (req: NextRequest, context?: any) => Promise<NextResponse>

type TRequest = {
  [key in HTTP_METHOD]: THandler
}

const onNoMatchHandler = async () => {
  const publicErrorObject = new MethodNotAllowedError()
  return NextResponse.json(publicErrorObject, {
    status: publicErrorObject.statusCode
  })
}

const onErrorHandler = async (error: any) => {
  const publicErrorObject = new InternalServerError({
    cause: error
  })
  console.error(publicErrorObject)
  return NextResponse.json(publicErrorObject, {
    status: publicErrorObject.statusCode
  })
}

const handle = (request: Partial<TRequest>) => {
  const handler: Partial<TRequest> = {}
  for (const method of HTTP_METHODS) {
    const fn = request[method]
    handler[method] = fn
      ? (req: NextRequest, context?: any) =>
          fn(req, context).catch(onErrorHandler)
      : onNoMatchHandler
  }
  return handler as TRequest
}

const controller = {
  handle
}

export default controller
