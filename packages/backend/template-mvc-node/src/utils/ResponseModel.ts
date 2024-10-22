import { Response } from 'express'

interface ResponseOptions {
  res: Response
  data?: any
  error?: string
  statusCode?: number
}
// eslint-disable-next-line
export class ResponseModel {
  static success ({ res, data, statusCode = 200 }: ResponseOptions): void {
    res.status(statusCode).json({
      success: true,
      data,
      message: 'Consulta exitosa',
      error: null
    })
  }

  static error ({ res, error, statusCode = 500 }: ResponseOptions): void {
    res.status(statusCode).json({
      success: false,
      data: null,
      message: 'Error en la consulta',
      error
    })
  }
}
