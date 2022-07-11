import { core } from 'src/core'
import { seedDb } from 'src/seed-db'
import { createDb } from 'src/create-db'
import { setupMaps } from 'src/setup-maps'
import { migrateDb } from 'src/migrate-db'

export const evander = {
  core,
  seedDb,
  migrateDb,
  setupMaps,
}

setupMaps()
  .then(createDb)
  .then(migrateDb)
  .then(seedDb)
  .catch(error => console.error(error) || process.exit(1))


