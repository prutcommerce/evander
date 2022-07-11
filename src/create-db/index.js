import { evander } from 'src'
import { mariadb } from 'src/deps'

const makeConnectionPool = async () => mariadb.createConnection({
  user: evander.core.settings.getDatabaseUsername(),
  password: evander.core.settings.getDatabasePassword(),
  host: evander.core.settings.getDatabaseHost(),
  port: evander.core.settings.getDatabasePort()
})

export const createDb = async () => {
  const connection = await makeConnectionPool()
  await connection.execute(`CREATE DATABASE IF NOT EXISTS ${evander.core.settings.getDatabaseName()};`)
  await connection.end()
}
