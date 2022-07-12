import { sequelize } from 'src/deps'

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.changeColumn('payment', 'card_cvv', {
  type: sequelize.DataTypes.STRING
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.changeColumn('payment', 'card_cvv', {
  type: sequelize.DataTypes.INTEGER.UNSIGNED
})
