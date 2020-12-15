'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { 
    title: 'Sistema de indicação escolares [API Rest]',
    description: 'API Rest desenvolvida para o projeto final da disciplina de Projeto de Software 2' 
  }
})

Route.resource("schools", "SchoolController").apiOnly();

Route.get('/indications', 'IndicationController.index')
Route.post('/indications', 'IndicationController.store')
Route.delete('/indications/:id', 'IndicationController.destroy')
Route.get('/indications/:school_id/:period', 'IndicationController.show')

Route.resource("user_apps", "UserAppController").apiOnly();
