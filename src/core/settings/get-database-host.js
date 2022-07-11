import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getDatabaseHost = () => {
  const settings = repository.get()

  return lodash.get(settings, 'database.host', '127.0.0.1')
}
