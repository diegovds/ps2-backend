'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropUserAppIdIndicationsSchema extends Schema {
  up () {
    this.table('indications', (table) => {
      table.dropColumn('user_app_id')
    })
  }

  down () {
    this.drop('drop_user_app_id_indications')
  }
}

module.exports = DropUserAppIdIndicationsSchema
