import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getEnv = () => {
  const settings = repository.get()

  return lodash.get(settings, 'environment', 'local')
}
