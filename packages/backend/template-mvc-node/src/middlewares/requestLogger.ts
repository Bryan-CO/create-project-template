import { NextFunction, Request, Response } from 'express'
import logger from '../logger/logger'

export function requestLogger () {
  return (req: Request, res: Response, next: NextFunction) => {
    let logMessage = `[${req.method}] ${req.path}`

    if (req.body !== undefined) {
      logMessage += `\nRequest Body: ${JSON.stringify(req.body)}`
    }

    if (req.params !== undefined) {
      logMessage += `\nRequest Params: ${JSON.stringify(req.params)}`
    }

    if (req.query !== undefined) {
      logMessage += `\nRequest Query: ${JSON.stringify(req.query)}`
    }
    logger.info(logMessage)
    next()
  }
}
