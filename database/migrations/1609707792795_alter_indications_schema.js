'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterIndicationsSchema extends Schema {
  up () {
    this.raw("ALTER TABLE indications \
              ADD CONSTRAINT indications_uid_foreign \
              FOREIGN KEY (uid) REFERENCES user_apps(uid);")
    this.raw("alter table indications add constraint indications_pkey primary key (uid, school_id, period);")
    this.raw("ALTER TABLE user_apps ADD COLUMN id integer;")
    this.raw("ALTER TABLE indications ADD COLUMN id integer;")
  }

  down () {
    this.drop('alter_indications')
  }
}

module.exports = AlterIndicationsSchema
