import { expressGraphql, graphql } from 'src/deps'
import { makeResolvers } from 'src/setup-graph/make-resolvers'
import { collectSchema } from 'src/setup-graph/collect-schema'

const customFormatErrorFn = error => {
  console.error('Graph request failed.', error.toJSON())

  return error.toJSON()
}

export const setupGraph = () => {
  const rootValue = makeResolvers()
  const schema = graphql.buildSchema(collectSchema())

  return expressGraphql.graphqlHTTP({ schema, rootValue, customFormatErrorFn })
}
