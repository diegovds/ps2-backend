# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

#### Routes


| Route        | Verb(s)   | Handler                  | Middleware      | Name            |
|--------------|-----------|--------------------------|-----------------|-----------------|
| /                               | HEAD,GET  │ Closure                      │            │ /                               │        │
| /schools/:period/:period        | HEAD,GET  │ SchoolController.index       │            │ /schools/:period/:period        │        │
| /schools                        | POST      │ SchoolController.store       │            │ /schools                        │        │
| schools/:id                    | DELETE    │ SchoolController.destroy     │            │ /schools/:id                    │        │
| /schools/:id                    | HEAD,GET  │ SchoolController.show        │            │ /schools/:id                    │        │
| /schools/:id                    | PUT       │ SchoolController.update      │            │ /schools/:id                    │        │
| /indications                    | HEAD,GET  │ IndicationController.index   │            │ /indications                    │        │
| /indications                    | POST      │ IndicationController.store   │            │ /indications                    │        │
| /indications/:id                | DELETE    │ IndicationController.destroy │            │ /indications/:id                │        │
| /indications/:school_id/:period | HEAD,GET  │ IndicationController.show    │            │ /indications/:school_id/:period │        │
| /user_apps                      | HEAD,GET  │ UserAppController.index      │            │ user_apps.index                 │        │
| /user_apps                      | POST      │ UserAppController.store      │            │ user_apps.store                 │        │
| /user_apps/:id                  | HEAD,GET  │ UserAppController.show       │            │ user_apps.show                  │        │
| /user_apps/:id                  | PUT,PATCH │ UserAppController.update     │            │ user_apps.update                │        │
| /user_apps/:id                  | DELETE    │ UserAppController.destroy    │            │ user_apps.destroy               │        │

