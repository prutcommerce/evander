import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getDatabasePort = () => {
  const settings = repository.get()

  return lodash.get(settings, 'database.port', 3306)
}
