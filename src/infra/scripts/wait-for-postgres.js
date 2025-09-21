const { exec } = require('node:child_process')

let tries = 60

const checkPostgres = () => {
  exec('docker exec postgres-saas pg_isready --host localhost', (_, stdout) => {
    if (tries === 0) {
      console.error(
        '\n\n🔴 Não foi possível estabelecer a conexão com o Postgres. Verifique se ele está rodando\n'
      )
      process.exit(1)
    }

    if (!stdout.includes('accepting connections')) {
      process.stdout.write('.')
      tries--
      setTimeout(checkPostgres, 1000)
      return
    }

    console.log('\n\n🟢 Postgres está pronto e aceitando conexões!\n')
  })
}

process.stdout.write('\n\n🔴 Aguardando Postgres aceitar conexões')
checkPostgres()
