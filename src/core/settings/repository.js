import { resolve } from 'path'
import { readFileSync } from 'fs'

const path = resolve(__dirname, 'env/settings.json')

const get = () => JSON.parse(readFileSync(path, 'utf8'))

export const repository = { get }
