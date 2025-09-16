import { HTTP_METHODS } from 'next/dist/server/web/http'

import { TErrorResponse } from '@/infra/errors'
import { API_BASE_URL } from '@/shared/constants/base-url'
import orchestrator from '@/tests/orchestrator'

beforeAll(orchestrator.waitForAllServices)

describe('Not allowed methods to /api/v1/status', () => {
  test('should return 405 and the response error', async () => {
    const url = `${API_BASE_URL}/status`
    const notAllowedMethods = HTTP_METHODS.filter((method) => method !== 'GET')
    const expectedData: TErrorResponse = {
      name: 'MethodNotAllowedError',
      message: 'Método não permitido para este endpoint.',
      action: 'Verifique se o método HTTP enviado é válido para este endpoint.',
      status_code: 405
    }
    for (const method of notAllowedMethods) {
      const response = await fetch(url, {
        method
      })
      expect(response.status).toBe(expectedData.status_code)
      if (method === 'HEAD') continue
      expect(await response.json()).toEqual(expectedData)
    }
  })
})
