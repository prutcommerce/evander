import { graphql } from 'src/deps'
import { CODE } from 'src/core/error/code'

export const validation = payload => new graphql.GraphQLError('Validation error.', {
  extensions: {
    errorCode: CODE.validation,
    payload: payload
  }
})
