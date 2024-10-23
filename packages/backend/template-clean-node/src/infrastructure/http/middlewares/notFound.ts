import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseModel } from '../responses/ResponseModel'
export const RouteNotFound = (req: Request, res: Response): void => {
  ResponseModel.error({ res, error: 'Recurso no encontrado!', statusCode: StatusCodes.NOT_FOUND })
}
