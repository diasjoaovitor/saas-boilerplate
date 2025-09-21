import { Suspense } from 'react'

import { Loader } from './loader.server'

export const AsyncWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>
}
