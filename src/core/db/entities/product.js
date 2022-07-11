import { sequelize } from 'src/deps'
import { ENTITY_NAMES } from 'src/core/db/entity-names'

export const product = driver => driver.define(ENTITY_NAMES.product, {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: sequelize.DataTypes.STRING,
}, {
  underscored: true,
  timestamps: true,
  paranoid: true,
  tableName: 'product',
})
