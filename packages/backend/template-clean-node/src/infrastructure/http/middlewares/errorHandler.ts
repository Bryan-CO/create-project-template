import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseModel } from '../responses/ResponseModel'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let status = StatusCodes.INTERNAL_SERVER_ERROR
  let message = 'Internal Server Error'

  if (err instanceof Error) {
    status = StatusCodes.BAD_REQUEST
    message = 'Formato de solicitud inválido. Verifique la sintaxis de los datos enviados.'
  }
  ResponseModel.error({ res, error: message, statusCode: status })
}
