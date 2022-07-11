import { lodash } from 'src/deps'
import { repository } from 'src/core/settings/repository'

export const getEnvironment = () => {
  const settings = repository.get()

  return lodash.get(settings, 'environment', 'local')
}
