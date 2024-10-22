import { ResponseModel } from '../utils/ResponseModel'
import { Response, Request } from 'express'

export const RouteNotFound = (req: Request, res: Response): void => {
  ResponseModel.error({ res, error: 'Recurso no encontrado', statusCode: 404 })
}
