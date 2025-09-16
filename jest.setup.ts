import '@testing-library/jest-dom'
import 'cross-fetch/polyfill'

import { TextEncoder } from 'util'

global.TextEncoder = TextEncoder as any

jest.mock('better-auth', () => ({
  betterAuth: jest.fn()
}))

jest.mock('better-auth/adapters/prisma', () => ({
  prismaAdapter: jest.fn()
}))
