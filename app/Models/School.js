'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class School extends Model {
    phone () {
        return this.hasOne('App/Models/Phone')
    }

    indication () {
        return this.hasMany('App/Models/Indication')
    }
}

module.exports = School
