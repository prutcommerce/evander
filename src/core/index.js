import { db } from 'src/core/db'
import { error } from 'src/core/error'
import { settings } from 'src/core/settings'

export const core = {
  db,
  settings,
  error,
}
