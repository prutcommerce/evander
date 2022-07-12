import { evander } from 'src'

const make = () => ({
  payments: evander.getPayments.resolver,
  createPayment: evander.createPayment.resolver,
})

export const resolvers = { make }
