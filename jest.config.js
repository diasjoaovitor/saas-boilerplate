const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.'
})

const jestConfig = createJestConfig({
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/tests/e2e/'],
  testTimeout: 60000
})

module.exports = jestConfig
