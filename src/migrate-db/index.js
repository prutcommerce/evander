import { umzug } from 'src/deps'
import { configs } from 'src/migrate-db/configs'

export const migrateDb = async () => {
  const instance = new umzug.Umzug(configs())

  await instance.up()

  console.log('Database migrations were successfully applied.')
}
