import { evander } from 'src'
import { sequelize } from 'src/deps'

const getPayments = async ({ after, first }) => {
  const entities = evander.core.db.entities()

  return await entities.payment.findAll({
    order: sequelize.col('id'),
    include: [],
    where: { id: { [sequelize.Op.gt]: after } },
    limit: first,
  })
}

export const repository = { getPayments }
