'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropForeignKeyIndicationsSchema extends Schema {
  up () {
    this.raw("alter table indications drop constraint indications_user_app_id_foreign;")
  }

  down () {
    this.drop('drop_foreign_key_indications')
  }
}

module.exports = DropForeignKeyIndicationsSchema
