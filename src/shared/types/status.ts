export type TStatus = {
  updated_at: string
  dependencies: {
    database: {
      version: string
      max_connections: string
      opened_connections: number
    }
  }
}
