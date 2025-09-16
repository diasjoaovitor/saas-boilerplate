import { API_BASE_URL } from '@/shared/constants/base-url'
import { TStatus } from '@/shared/types/status'
import orchestrator from '@/tests/orchestrator'

beforeAll(orchestrator.waitForAllServices)

describe('GET to /api/v1/status', () => {
  describe('Anonymous user', () => {
    test('Retrieving current system status', async () => {
      const response = await fetch(`${API_BASE_URL}/status`)
      expect(response.status).toBe(200)

      const data: TStatus = await response.json()
      const { updated_at } = data

      const parsedUpdatedAt = new Date(updated_at).toISOString()
      expect(updated_at).toBe(parsedUpdatedAt)

      const expectedData = {
        updated_at,
        dependencies: {
          database: {
            version: '16.0',
            max_connections: '100'
          }
        }
      }
      const { opened_connections, ...rest } = data.dependencies.database
      expect({ ...data, dependencies: { database: rest } }).toEqual(
        expectedData
      )
      expect(opened_connections).toBeGreaterThan(0)
    })
  })
})
