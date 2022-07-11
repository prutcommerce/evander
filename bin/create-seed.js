#!/usr/bin/env node

const umzug = require('umzug')

const TEMPLATE = `/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => null
`

const CREATE_OPTIONS = Object.freeze({
  template: filepath => [[filepath, TEMPLATE]],
  folder: 'src/seed-db/seeds',
})

const instance = new umzug.Umzug({ migrations: [], create: CREATE_OPTIONS })

instance.runAsCLI().catch(error => console.log(error))
