import { axios } from 'src/deps'

const makeAxiosConfig = () => ({ headers: { 'Content-Type': 'application/json' } })

const configure = async ({ name, config, baseUrl }) => {
  const url = `${baseUrl}/connectors/${name}/config`
  return axios.put(url, config, makeAxiosConfig())
}

export const repository = { configure }
