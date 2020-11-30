'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAppSchema extends Schema {
  up () {
    this.create('user_apps', (table) => {
      table.increments()
      table.integer('socialId').notNullable()
      table.string('urlPhoto').notNullable()
      table.string('username').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_apps')
  }
}

module.exports = UserAppSchema
