export const discover = () => {
  const importer = require?.context('src/migrate-db/migrations', true, /\.js$/)

  const createName = name => name.replace('./', '')

  return importer?.keys().map(name => ({
    name: createName(name),
    up: ({ context }) => importer(name).up(context?.queryInterface, context?.sequelize),
    down: ({ context }) => importer(name).down(context?.queryInterface, context?.sequelize),
  }))
}
