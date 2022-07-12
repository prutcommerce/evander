import { evander } from 'src'
import { nephele } from 'src/deps'
import { repository } from 'src/create-payment/repository'

export const create = async input => {
  input = { ...input, status: evander.getPayments.STATUS.success }

  const created = await repository.createPayment(input)
  const decodedId = nephele.transformId.decode(created?.id)

  return await repository.getPayment(decodedId?.id)
}
