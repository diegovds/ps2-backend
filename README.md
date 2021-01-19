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


| Route        | Handler                  
|--------------|--------------------------
| /                                 | Closure                                  | 
| /schools/:period/:period         | SchoolController.index                   | 
| /schools                         | SchoolController.store                   | 
| schools/:id                    | SchoolController.destroy                 | 
| /schools/:id                   | SchoolController.show                    | 
| /schools/:id                   | SchoolController.update                  | 
| /indications                      | IndicationController.index               | 
| /indications                       | IndicationController.store               | 
| /indications/:id                    | IndicationController.destroy             | 
| /indications/:school_id/:period   | IndicationController.show                | 
| /user_apps                        | UserAppController.index                  | 
| /user_apps                            | UserAppController.store                  | 
| /user_apps/:id                    | UserAppController.show                   | 
| /user_apps/:id                   | UserAppController.update                 | 
| /user_apps/:id                      | UserAppController.destroy                | 

