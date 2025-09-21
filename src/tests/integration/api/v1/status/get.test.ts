import { API_BASE_URL } from '@/shared/constants'
import { TStatus } from '@/shared/types/status'

describe('GET to /api/v1/status', () => {
  describe('Anonymous user', () => {
    test('Retrieving current system status', async () => {
      const response = await fetch(`${API_BASE_URL}/status`)
      expect(response.status).toBe(200)

      const data: TStatus = await response.json()
      const { updated_at } = data

      const parsedUpdatedAt = new Date(updated_at).toISOString()
      expect(updated_at).toBe(parsedUpdatedAt)

      const expectedData: TStatus = {
        updated_at,
        dependencies: {
          database: {
            version: '16.0',
            max_connections: '100',
            opened_connections: 1
          }
        }
      }

      expect(data).toEqual(expectedData)
    })
  })
})
