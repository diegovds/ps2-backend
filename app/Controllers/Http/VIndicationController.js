'use strict'

const Database = use('Database')
const VIndication = use('App/Models/VIndication')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vindications
 */
class VIndicationController {
  /**
   * Show a list of all vindications.
   * GET vindications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const vindications = await VIndication.all()
    
      return vindications
    } catch (e) {
      return response.badRequest('Ocorreu um erro inesperado.')
    }
  }

  /**
   * Render a form to be used for creating a new vindication.
   * GET vindications/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new vindication.
   * POST vindications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single vindication.
   * GET vindications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try{
      const vindication = await VIndication.findByOrFail('school_id', params.id)

      return vindication
    } catch (e) {
      return response.badRequest('Ocorreu um erro inesperado.')
    }
  }

  /**
   * Render a form to update an existing vindication.
   * GET vindications/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update vindication details.
   * PUT or PATCH vindications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a vindication with id.
   * DELETE vindications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = VIndicationController
