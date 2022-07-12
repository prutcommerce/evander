import { evander } from 'src'
import { lodash } from 'src/deps'
import { create } from 'src/create-payment/create'
import { validation } from 'src/create-payment/validation'

export const resolver = async (args, _, _context) => {
  const validationResult = await validation.execute(args)

  if (lodash.isError(validationResult)) return evander.core.error.validation(validationResult?.inner)

  return create(validationResult?.payment)
}
