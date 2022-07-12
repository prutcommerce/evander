import { connectionUrl } from 'src/setup-connect/connection-url'
import { createProductSink } from 'src/setup-connect/create-product-sink'

export const setupConnect = async () => {
  await createProductSink()
}

setupConnect.connectionUrl = connectionUrl
