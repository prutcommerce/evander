import { umzug } from 'src/deps'
import { configs } from 'src/seed-db/configs'

export const seedDb = async () => {
  const instance = new umzug.Umzug(configs())

  await instance.up()

  console.log('Database seeds were successfully applied.')
}
