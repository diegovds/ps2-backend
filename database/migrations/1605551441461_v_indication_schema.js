'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')

class VIndicationSchema extends Schema {
  async up () {
    await Database.raw('CREATE VIEW v_indications AS select schools.id as school_id, count(*) as indications from schools join indications on schools.id = indications.school_id where cast(extract(epoch from age(current_timestamp, indications.created_at)) as integer) < 2592000 group by (schools.id)')
  }

  async down () {
    await Database.raw('DROP VIEW IF EXISTS v_indications;')
  }
}

module.exports = VIndicationSchema
