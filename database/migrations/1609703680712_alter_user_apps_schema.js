'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserAppsSchema extends Schema {
  up () {
    this.raw("alter table user_apps drop constraint user_apps_pkey;")
    this.raw("ALTER TABLE user_apps DROP COLUMN id;")
    this.raw("alter table user_apps add constraint user_apps_pkey primary key (uid)")
  }

  down () {
    this.drop('alter_user_apps')
  }
}

module.exports = AlterUserAppsSchema
