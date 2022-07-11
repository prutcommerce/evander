import { getDatabaseName } from 'src/core/settings/get-database-name'
import { getDatabaseHost } from 'src/core/settings/get-database-host'
import { getDatabasePort } from 'src/core/settings/get-database-port'
import { getDatabaseUsername } from 'src/core/settings/get-database-username'
import { getDatabasePassword } from 'src/core/settings/get-database-password'

export const getDatabaseUri = () => {
  const username = getDatabaseUsername()
  const password = getDatabasePassword()
  const name = getDatabaseName()
  const host = getDatabaseHost()
  const port = getDatabasePort()

  return `mariadb://${username}:${password}@${host}:${port}/${name}`
}
