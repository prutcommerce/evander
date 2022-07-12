import { relations } from 'src/core/db/relations'
import { product } from 'src/core/db/entities/product'

export const entities = () => {
  const coreEntities = nephele.modelDb.entities()

  return relations({
    ...coreEntities,
    product: product(coreEntities.driver),
  })
}
