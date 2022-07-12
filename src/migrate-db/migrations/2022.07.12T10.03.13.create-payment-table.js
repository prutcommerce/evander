import { sequelize } from 'src/deps'

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.createTable('payment', {
  id: {
    type: sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  created_at: {
    type: sequelize.DataTypes.DATE,
    defaultValue: sequelize.literal('UTC_TIMESTAMP'),
    allowNull: true,
  },
  updated_at: {
    type: sequelize.DataTypes.DATE,
    defaultValue: sequelize.literal('UTC_TIMESTAMP'),
    allowNull: true,
  },
  deleted_at: {
    type: 'DATETIME NULL',
    allowNull: true,
  },
  order_id: sequelize.DataTypes.INTEGER.UNSIGNED,
  card_number: sequelize.DataTypes.STRING,
  card_cvv: sequelize.DataTypes.STRING,
  card_expiry_year: sequelize.DataTypes.INTEGER.UNSIGNED,
  card_expiry_month: sequelize.DataTypes.INTEGER.UNSIGNED,
  status: sequelize.DataTypes.STRING,
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.dropTable('payment')
