'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropPrimaryKeyIndicationSchema extends Schema {
  up () {
    this.raw("alter table indications drop constraint indications_pkey;")
  }

  down () {
    this.drop('drop_primary_key_indications')
  }
}

module.exports = DropPrimaryKeyIndicationSchema
