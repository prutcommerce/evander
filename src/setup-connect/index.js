import { connectionUrl } from 'src/setup-connect/connection-url'
import { createOrderSink } from 'src/setup-connect/create-order-sink'
import { createProductSink } from 'src/setup-connect/create-product-sink'

export const setupConnect = async () => {
  await createProductSink()
  await createOrderSink()
}

setupConnect.connectionUrl = connectionUrl
