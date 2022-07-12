import { core } from 'src/core'
import { seedDb } from 'src/seed-db'
import { nephele, yup } from 'src/deps'
import { migrateDb } from 'src/migrate-db'
import { setupServer } from 'src/setup-server'
import { getPayments } from 'src/get-payments'
import { setupConnect } from 'src/setup-connect'
import { createPayment } from 'src/create-payment'

export const evander = {
  core,
  seedDb,
  migrateDb,
  getPayments,
  createPayment,
}

nephele.setupLogger()
nephele.setupValidation(yup)
nephele.setupMaps(core.settings)

nephele.createDb(core.settings)
  .then(nephele.migrateDb(migrateDb.configs()))
  .then(nephele.seedDb(seedDb.configs()))
  .then(setupConnect)
  .then(nephele.setupRest(setupServer.configs()))
  .catch(error => console.error(error) || process.exit(1))


