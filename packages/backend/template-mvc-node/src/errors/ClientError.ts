import { AppError } from './AppError'

export class ClientError extends Error implements AppError {
  statusCode: number
  constructor (message: string, statusCode = 400) {
    super(message)
    this.name = 'ClientError'
    this.statusCode = statusCode
  }
}
