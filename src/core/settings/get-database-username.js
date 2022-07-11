import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getDatabaseUsername = () => {
  const settings = repository.get()

  return lodash.get(settings, 'database.username', 'root')
}
