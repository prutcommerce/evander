import { lodash, nephele } from 'src/deps'
import { repository } from 'src/create-payment/repository'

export const orderExists = async value => {
  const decoded = nephele.transformId.decode(value)
  const foundProduct = await repository.getOrder(decoded.id)

  return !lodash.isNil(foundProduct)
}
