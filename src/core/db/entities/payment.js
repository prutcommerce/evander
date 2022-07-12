import { sequelize, nephele } from 'src/deps'
import { ENTITY_NAMES } from 'src/core/db/entity-names'

export const payment = driver => driver.define(ENTITY_NAMES.payment, {
  __typename: {
    type: sequelize.DataTypes.VIRTUAL,
    get: () => 'Payment'
  },
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    get: nephele.modelDb.getEncodedId(ENTITY_NAMES.payment),
  },
  orderId: {
    type: sequelize.DataTypes.INTEGER.UNSIGNED,
    get: nephele.modelDb.getEncodedId(ENTITY_NAMES.order),
    set: nephele.modelDb.setEncodedId('orderId'),
  },
  cardNumber: sequelize.DataTypes.STRING,
  cardCvv: sequelize.DataTypes.STRING,
  cardExpiryYear: sequelize.DataTypes.INTEGER.UNSIGNED,
  cardExpiryMonth: sequelize.DataTypes.INTEGER.UNSIGNED,
  status: sequelize.DataTypes.STRING,
}, {
  underscored: true,
  timestamps: true,
  paranoid: true,
  tableName: 'payment',
})
