'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropIdIndicationsSchema extends Schema {
  up () {
    this.table('indications', (table) => {
      table.dropColumn('id')
    })
  }

  down () {
    this.drop('drop_id_indications')
  }
}

module.exports = DropIdIndicationsSchema
