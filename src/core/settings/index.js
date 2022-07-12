import { getEnv } from 'src/core/settings/get-env'
import { getConnectUrl } from 'src/core/settings/get-connect-url'
import { getDatabaseUri } from 'src/core/settings/get-database-uri'
import { getDatabaseName } from 'src/core/settings/get-database-name'
import { getDatabaseHost } from 'src/core/settings/get-database-host'
import { getDatabasePort } from 'src/core/settings/get-database-port'
import { getDatabaseUsername } from 'src/core/settings/get-database-username'
import { getDatabasePassword } from 'src/core/settings/get-database-password'

export const settings = {
  getEnv,
  getConnectUrl,
  getDatabaseHost,
  getDatabasePort,
  getDatabaseUri,
  getDatabaseName,
  getDatabaseUsername,
  getDatabasePassword,
}
