'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddPrimaryKeysIndicationSchema extends Schema {
  up () {
    this.raw("alter table indications add constraint indications_pkey primary key (user_app_id, school_id, period)")
  }

  down () {
    this.drop('add_primary_keys_indications')
  }
}

module.exports = AddPrimaryKeysIndicationSchema
