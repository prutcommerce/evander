import { evander } from 'src'

const make = () => ({
  payments: evander.getPayments.resolver,
  bar: '',
})

export const resolvers = { make }
