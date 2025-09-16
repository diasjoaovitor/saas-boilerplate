import { getSessionCookie } from 'better-auth/cookies'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { AUTH_ROUTES, PRIVATE_ROUTES } from './shared/constants'

export const middleware = (request: NextRequest) => {
  const route = request.nextUrl.pathname

  const isPrivateRoute = PRIVATE_ROUTES.includes(route)

  const sessionCookie = getSessionCookie(request)

  if (isPrivateRoute && !sessionCookie) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const isAuthRoute = AUTH_ROUTES.includes(route)

  if (isAuthRoute && sessionCookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher:
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
}
