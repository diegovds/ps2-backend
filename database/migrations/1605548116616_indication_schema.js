'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicationSchema extends Schema {
  up () {
    this.create('indications', (table) => {
      table.increments()
      table
        .integer('school_id')
        .unsigned()
        .index('indication_school_id')
        .references('id')
        .inTable('schools')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('indications')
  }
}

module.exports = IndicationSchema
