import { expect, test } from '@playwright/test'

import { BASE_URL } from '@/shared/constants'
import orchestrator from '@/tests/orchestrator'

test.beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await orchestrator.clearDatabase()
  await orchestrator.signUp()
})

test('Sign In user with email and password', async ({ page }) => {
  await page.goto('/sign-in')
  await page.getByRole('button', { name: 'Sign In' }).click()
  await page.waitForURL('/dashboard')
  expect(page.url()).toBe(`${BASE_URL}/dashboard`)
})
