import * as awilix from 'awilix'
import { WinstonLogger } from '../../adapters/logger/logger.impl'

const loggerContainer = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

loggerContainer.register({
  logger: awilix.asClass(WinstonLogger).singleton()
})

const logger = loggerContainer.resolve<WinstonLogger>('logger')
export {
  logger
}
