import { morgan, express } from 'src/deps'
import { routes } from 'src/setup-rest/routes'

const PORT = 5100

export const setupRest = () => {
  const server = express()

  server.use(morgan('dev'))
  server.use(express.json())

  routes.setup(server)

  server.listen(PORT, () => console.log(`Rest server is listening on 0.0.0.0:${PORT}...`))
}
