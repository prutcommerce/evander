import { evander } from 'src'

const createPayment = async value => {
  const entities = evander.core.db.entities()

  return entities.payment.create(value)
}

const getOrder = async id => {
  const entities = evander.core.db.entities()

  return entities.order.findOne({ where: { id }, include: [] })
}

const getPayment = async id => {
  const entities = evander.core.db.entities()

  return entities.payment.findOne({ where: { id }, include: [] })
}

export const repository = { getOrder, getPayment, createPayment }
