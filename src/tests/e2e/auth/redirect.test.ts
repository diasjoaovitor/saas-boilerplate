import { expect, test } from '@playwright/test'

import { BASE_URL } from '@/shared/constants'
import orchestrator from '@/tests/orchestrator'

test.beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await orchestrator.clearDatabase()
})

test('Unauthorized user', async ({ page }) => {
  await page.goto('/dashboard')
  await page.waitForURL('/')
  expect(page.url()).toBe(`${BASE_URL}/`)
})

test('Authorized user', async ({ page }) => {
  await orchestrator.signUp()
  await page.goto('/sign-in')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForURL('/dashboard')
  expect(page.url()).toBe(`${BASE_URL}/dashboard`)

  await page.goto('/sign-up')
  await page.waitForURL('/dashboard')
  expect(page.url()).toBe(`${BASE_URL}/dashboard`)

  await page.goto('/sign-in')
  await page.waitForURL('/dashboard')
  expect(page.url()).toBe(`${BASE_URL}/dashboard`)
})
