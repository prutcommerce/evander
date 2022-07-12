import { nephele } from 'src/deps'
import { repository } from 'src/get-payments/repository'

export const get = async args => {
  const orders = await repository.getPayments(args)

  return nephele.relay.makePage(orders)
}
