'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserInIndicationSchema extends Schema {
  up () {
    this.alter('indications', (table) => {
      table
        .integer('user_app_id')
        .unsigned()
        .index('indication_user_app_id')
        .references('id')
        .inTable('user_apps')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('add_user_in_indications')
  }
}

module.exports = AddUserInIndicationSchema
