import { Request, Response, NextFunction } from 'express'
import { ResponseModel } from '../utils/ResponseModel'
import { AppError } from '../errors/AppError'
import { ClientError } from '../errors/ClientError'
import logger from '../logger/logger'

export function errorHandler (err: AppError, _req: Request, res: Response, _next: NextFunction): void {
  const statusCode = err.statusCode
  const error = err.message
  if (err instanceof ClientError) {
    ResponseModel.error({ res, statusCode, error })
  } else {
    logger.error(err.message)
    ResponseModel.error({ res, error: 'Something went wrong! try again later' })
  }
}
