'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropPrimaryKeysIndicationsSchema extends Schema {
  up () {
    this.raw("alter table indications drop constraint indications_pkey;")
  }

  down () {
    this.drop('drop_primary_keys_indications')
  }
}

module.exports = DropPrimaryKeysIndicationsSchema
