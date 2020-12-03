'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UidInUserAppSchema extends Schema {
  up () {
    this.alter('user_apps', (table) => {
      table.string('uid')
    })
  }

  down () {
    this.drop('uid_in_user_apps')
  }
}

module.exports = UidInUserAppSchema
