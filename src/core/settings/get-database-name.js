import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getDatabaseName = () => {
  const settings = repository.get()

  return lodash.get(settings, 'database.name', 'evander_local')
}
