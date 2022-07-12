import { evander } from 'src'
import { get } from 'src/get-payments/get'
import { lodash, nephele } from 'src/deps'
import { validation } from 'src/get-payments/validation'

export const resolver = async args => {
  const validationResult = await validation.execute(args)

  if (lodash.isError(validationResult)) return evander.core.error.validation(validationResult?.inner)

  return await get(nephele.relay.makeArgs(validationResult))
}
