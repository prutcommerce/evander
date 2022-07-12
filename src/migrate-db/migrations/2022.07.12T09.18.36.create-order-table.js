import { sequelize } from 'src/deps'

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.createTable('order', {
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
  product_id: sequelize.DataTypes.INTEGER.UNSIGNED,
  quantity: sequelize.DataTypes.FLOAT,
  status: sequelize.DataTypes.STRING,
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.dropTable('order')
