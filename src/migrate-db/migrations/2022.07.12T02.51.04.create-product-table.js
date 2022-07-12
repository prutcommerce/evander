import { sequelize } from 'src/deps'

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.createTable('product', {
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
  name: sequelize.DataTypes.STRING,
  quantity: sequelize.DataTypes.FLOAT,
  quantity_unit: sequelize.DataTypes.STRING,
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.dropTable('product')
