import { evander } from 'src'
import { umzug } from 'src/deps'
import { discover } from 'src/migrate-db/discover'

export const configs = () => {
  const sequelize = evander.core.db.entities().driver

  return ({
    storage: new umzug.SequelizeStorage({ sequelize, tableName: 'db_migration' }),
    migrations: discover(),
    context: { sequelize, queryInterface: sequelize.getQueryInterface() }
  })
}
