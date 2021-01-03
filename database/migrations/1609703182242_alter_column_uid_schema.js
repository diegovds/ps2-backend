'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterColumnUidSchema extends Schema {
  up () {
    this.raw("ALTER TABLE indications ALTER COLUMN uid TYPE varchar(255);")
  }

  down () {
    this.drop('alter_column_uids')
  }
}

module.exports = AlterColumnUidSchema
