// src/infrastructure/logger/WinstonLogger.ts
import winston, { Logger, format, transports } from 'winston'
import path from 'path'

import { ILogger } from '../../../adapters/interfaces/logger'
import { AppUtils } from '../../../shared/utils/AppUtils'

export class WinstonLogger implements ILogger {
  private readonly _logger: Logger
  constructor () {
    const consoleFormat = format.printf(({ level, message }) => {
      return `${AppUtils.getDateTime()} [${level}]: ${message as string}`
    })
    const fileFormat = format.printf(({ level, message }) => {
      return `${AppUtils.getDateTime()} [${level}]: ${message as string}`
    })

    this._logger = winston.createLogger({
      level: 'info',
      transports: [
        new transports.Console({
          format: format.combine(format.colorize(), consoleFormat)
        }),
        new transports.File({
          format: fileFormat,
          filename: path.join(__dirname, '../../../../logs/app.log')
        })
      ]
    })
  }

  info (message: string): void {
    this._logger.info(message)
  }

  warn (message: string): void {
    this._logger.warn(message)
  }

  error (message: string): void {
    this._logger.error(message)
  }

  debug (message: string): void {
    this._logger.debug(message)
  }
}
