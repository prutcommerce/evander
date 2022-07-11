import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getDatabasePassword = () => {
  const settings = repository.get()

  return lodash.get(settings, 'database.password', 'admin')
}
