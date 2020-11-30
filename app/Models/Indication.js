'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Indication extends Model {
    school () {
        return this.belongsTo('App/Models/School')
    }
    userapp () {
        return this.belongsTo('App/Models/UserApp')
    }
}

module.exports = Indication

