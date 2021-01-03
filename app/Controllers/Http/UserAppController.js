'use strict'

const Database = use('Database')
const UserApp = use('App/Models/UserApp')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with userapps
 */
class UserAppController {
  /**
   * Show a list of all userapps.
   * GET userapps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const users = await UserApp.all()
      
      return response.json(users)
    } catch (e) {
      return response.badRequest('Ocorreu um erro inesperado.')
    }
  }

  /**
   * Create/save a new userapp.
   * POST userapps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const userData = request.only(['urlPhoto', 'username', 'uid'])

    const trx = await Database.beginTransaction()
    try {
      const user = await UserApp.create({ ...userData }, trx)

      await trx.commit()

      return response.json({
        success: true,
        data: { 
          user: {
            ...user.$attributes
          }
        },
        message: 'User criado com sucesso.'
      })
    } catch(error) {
      return response.badRequest(`Erro: ${error.name}\nMensagem: ${error.message}`)
    }
  }

  /**
   * Display a single userapp.
   * GET userapps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const uid = await UserApp.findByOrFail('uid', params.id)

      const user = await Database
        .select('uid')
        .from('user_apps')
        .where('uid', uid.uid)
        
      return response.json(user)
    } catch (e) {
      return response.badRequest('Ocorreu um erro ao listar o user.')
    }
  }

  /**
   * Update userapp details.
   * PUT or PATCH userapps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a userapp with id.
   * DELETE userapps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserAppController
