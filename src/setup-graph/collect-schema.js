import { ramda } from 'src/deps'

const collectEvanderSchema = () => {
  const graphImporter = require?.context('src', true, /\.graphql$/)

  return graphImporter?.keys()
    .map(graphImporter)
    .map(module => module?.default)
    .reduce(ramda.concat, ``)
}

export const collectSchema = () => `
${collectEvanderSchema()}
`
