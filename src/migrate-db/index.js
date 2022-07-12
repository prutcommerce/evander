import { evander } from 'src'

const configs = () => ({
  settings: evander.core.settings,
  importer: require?.context('src/migrate-db/migrations', true, /\.js$/),
})

export const migrateDb = { configs }
