import { evander } from 'src'

const configs = () => ({
  settings: evander.getSettings,
  importer: require?.context('src/seed-db/seeds', true, /\.js$/),
})

export const seedDb = { configs }
