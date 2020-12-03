'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropSocialIdSchema extends Schema {
  up () {
    this.table('user_apps', (table) => {
      table.dropColumn('socialId')
    })
  }

  down () {
    this.drop('drop_social_ids')
  }
}

module.exports = DropSocialIdSchema
