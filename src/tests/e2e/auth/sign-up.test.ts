import { expect, test } from '@playwright/test'

import { BASE_URL } from '@/shared/constants'
import orchestrator from '@/tests/orchestrator'

test.beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await orchestrator.clearDatabase()
})

test('Sign Up user with email and password', async ({ page }) => {
  await page.goto('/sign-up')
  await page.getByRole('button', { name: 'Sign Up' }).click()
  await page.waitForURL('/dashboard')
  expect(page.url()).toBe(`${BASE_URL}/dashboard`)
})
