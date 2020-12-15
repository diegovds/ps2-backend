'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')

class DropVIndicationSchema extends Schema {
  async up () {
    await Database.raw('DROP VIEW v_indications')
  }

  async down () {
    await Database.raw('DROP VIEW IF EXISTS v_indications;')
  }
}

module.exports = DropVIndicationSchema
