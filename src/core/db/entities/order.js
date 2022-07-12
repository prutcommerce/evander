import { sequelize, nephele } from 'src/deps'
import { ENTITY_NAMES } from 'src/core/db/entity-names'

export const order = driver => driver.define(ENTITY_NAMES.order, {
  __typename: {
    type: sequelize.DataTypes.VIRTUAL,
    get: () => 'Order'
  },
  id: {
    type: sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    get: nephele.modelDb.getEncodedId(ENTITY_NAMES.order),
  },
  productId: {
    type: sequelize.DataTypes.INTEGER.UNSIGNED,
    get: nephele.modelDb.getEncodedId(ENTITY_NAMES.product),
    set: nephele.modelDb.setEncodedId('productId'),
  },
  quantity: sequelize.DataTypes.FLOAT,
  status: sequelize.DataTypes.STRING,
}, {
  underscored: true,
  timestamps: true,
  paranoid: true,
  tableName: 'order',
})
