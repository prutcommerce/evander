import { evander } from 'src'
import { sourceMapSupport } from 'src/deps'

export const setupMaps = async () => {
  if (evander.core.settings.getEnvironment() !== 'local') return

  sourceMapSupport.install()
}
