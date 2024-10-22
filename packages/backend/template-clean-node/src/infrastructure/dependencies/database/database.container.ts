import * as awilix from 'awilix'
import { DatabaseClient } from '../../adapters/database/DbPostgre.impl'

const dbContainer = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

dbContainer.register({
  databaseClient: awilix.asClass(DatabaseClient).singleton()
})

const dbClient = dbContainer.resolve<DatabaseClient>('databaseClient')
export {
  dbClient
}
