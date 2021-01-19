'use strict'

const Database = use('Database')
const Indication = use('App/Models/Indication')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with indications
 */
class IndicationController {
  /**
   * Show a list of all indications.
   * GET indications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const indications = await Database
        .raw('select school_id, count(*) as indications \
              from indications \
              group by (school_id) \
              order by (indications) desc'
        )
      Database.close()

      return response.json(indications.rows)
    } catch (error) {
      return response.badRequest(`Erro: ${error.name}\nMensagem: ${error.message}`)
    }
  }

  /**
   * Render a form to be used for creating a new indication.
   * GET indications/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new indication.
   * POST indications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const indicationData = request.only(['school_id', 'uid', 'period'])

    const trx = await Database.beginTransaction()
    try {
      const indication = await Indication.create({ ...indicationData }, trx)

      await trx.commit()
      Database.close()

      return response.json({
        success: true,
        data: {
          indication: {
            ...indication.$attributes
          }
        },
        message: 'Indicacao criada com sucesso.'
      })
    } catch (error) {
      return response.badRequest(`Erro: ${error.name}\nMensagem: ${error.message}`)
    }
  }

  /**
   * Display a single indication.
   * GET indications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const school = await Database
        .raw('select s.id, s."socialReason", s."latitudeSchool", s."longitudeSchool", s."emailSchool", s."addressSchool", p."numberPhone" \
              from schools as s join phones as p on s.id = p.school_id \
              where (s.id =' + params.school_id + ')'
        )

      Database.close()

      const indication = await Database
        .raw('select i.school_id, count(*) as indications \
              from indications i \
              where (i.period =' + params.period + 'AND i.school_id =' + params.school_id + ' ) \
              group by (i.school_id)'
        )

      Database.close()

      //return response.json(school.rows)

      try {
        return response.json({
          id: school.rows[0].id,
          socialReason: school.rows[0].socialReason,
          latitudeSchool: school.rows[0].latitudeSchool,
          longitudeSchool: school.rows[0].longitudeSchool,
          emailSchool: school.rows[0].emailSchool,
          addressSchool: school.rows[0].addressSchool,
          numberPhone: school.rows[0].numberPhone,
          school_id: indication.rows[0].school_id,
          indications: indication.rows[0].indications
        })
      } catch (error) {
        return response.json({
          id: school.rows[0].id,
          socialReason: school.rows[0].socialReason,
          latitudeSchool: school.rows[0].latitudeSchool,
          longitudeSchool: school.rows[0].longitudeSchool,
          emailSchool: school.rows[0].emailSchool,
          addressSchool: school.rows[0].addressSchool,
          numberPhone: school.rows[0].numberPhone
        })
      }

    } catch (error) {
      return response.badRequest(`Erro: ${error.name}\nMensagem: ${error.message}`)
    }
  }

  /**
   * Render a form to update an existing indication.
   * GET indications/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update indication details.
   * PUT or PATCH indications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a indication with id.
   * DELETE indications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const indication = await Indication.findByOrFail('id', params.id)
    try {
      await indication.delete()
      return response.json({
        message: 'Indicacao removida com sucesso.'
      })
    } catch (e) {
      return response.badRequest('Ocorreu um erro ao deletar a indicacao.')
    }
  }
}

module.exports = IndicationController

