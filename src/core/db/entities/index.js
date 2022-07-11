import { driver } from 'src/core/db/driver'
import { relations } from 'src/core/db/relations'
import { product } from 'src/core/db/entities/product'


export const entities = () => {
  const driverInstance = driver()

  return relations({
    driver: driverInstance,
    product: product(driverInstance),
  })
}
