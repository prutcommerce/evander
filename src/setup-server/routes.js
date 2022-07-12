import { nephele } from 'src/deps'
import { resolvers } from 'src/setup-server/resolvers'

const graphConfigs = () => ({
  resolvers,
  importer: require?.context('src', true, /\.graphql$/),
})

const setup = server => {
  server.post('/graph', nephele.setupGraph(graphConfigs()))
}

export const routes = { setup }
