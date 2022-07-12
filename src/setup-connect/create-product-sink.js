import { evander } from 'src'
import { connectionUrl } from 'src/setup-connect/connection-url'
import { createConnector } from 'src/setup-connect/create-connector'

const makeConfig = () => ({
  'connector.class': 'io.confluent.connect.jdbc.JdbcSinkConnector',
  'tasks.max': 1,
  'connection.url': connectionUrl(),
  'connection.user': evander.core.settings.getDatabaseUsername(),
  'connection.password': evander.core.settings.getDatabasePassword(),
  'topics': 'prutcommerce_product',
  'auto.create': false,
  'pk.fields': 'id',
  'pk.mode': 'record_value',
  'delete.enabled': false,
  'key.converter': 'org.apache.kafka.connect.json.JsonConverter',
  'value.converter': 'org.apache.kafka.connect.json.JsonConverter',
  'key.converter.schemas.enable': false,
  'value.converter.schemas.enable': true,
  'table.name.format': 'product',
  'insert.mode': 'upsert'
})

export const createProductSink = async () => {
  const params = {
    name: 'evander_unit_sink',
    config: makeConfig(),
    baseUrl: evander.core.settings.getConnectUrl(),
  }

  await createConnector(params)
}
