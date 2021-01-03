'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UidInIndicationsSchema extends Schema {
  up () {
    this.alter('indications', (table) => {
      table.integer('uid')
    })
  }

  down () {
    this.drop('uid_in_indications')
  }
}

module.exports = UidInIndicationsSchema
