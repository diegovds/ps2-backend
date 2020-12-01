'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeriodInIndicationSchema extends Schema {
  up () {
    this.alter('indications', (table) => {
      table.integer('period')
    })
  }

  down () {
    this.drop('period_in_indications')
  }
}

module.exports = PeriodInIndicationSchema
