'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolSchema extends Schema {
  up () {
    this.create('schools', (table) => {
      table.increments()
      table.string('socialReason').notNullable()
      table.float('latitudeSchool').notNullable()
      table.float('longitudeSchool').notNullable()
      table.string('emailSchool').notNullable()
      table.string('addressSchool').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schools')
  }
}

module.exports = SchoolSchema
