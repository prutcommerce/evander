import { evander } from 'src'

export const connectionUrl = () => {
  const host = evander.core.settings.getDatabaseHost()
  const port = evander.core.settings.getDatabasePort()
  const name = evander.core.settings.getDatabaseName()

  return `jdbc:mariadb://${host}:${port}/${name}`
}
