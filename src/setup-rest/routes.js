import { evander } from 'src'

const setup = server => {
  server.post('/graph', evander.setupGraph())
}

export const routes = { setup }
