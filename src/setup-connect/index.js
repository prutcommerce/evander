import { connectionUrl } from 'src/setup-connect/connection-url'
import { createOrderSink } from 'src/setup-connect/create-order-sink'
import { createProductSink } from 'src/setup-connect/create-product-sink'
import { createPaymentSource } from 'src/setup-connect/create-payment-source'

export const setupConnect = async () => {
  await createPaymentSource()
  await createProductSink()
  await createOrderSink()
}

setupConnect.connectionUrl = connectionUrl
