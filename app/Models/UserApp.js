'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserApp extends Model {
    indication () {
        return this.hasOne('App/Models/Indication')
    }
}

module.exports = UserApp
