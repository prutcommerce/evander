import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getConnectUrl = () => {
  const settings = repository.get()

  const host = lodash.get(settings, 'connect.host', 'http://localhost')
  const port = lodash.get(settings, 'connect.port', '8083')

  return `${host}:${port}`
}
