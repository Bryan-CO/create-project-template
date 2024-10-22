import express, { Router } from 'express'
import { ApiConfig } from '../../config/EnvConfig'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler'
import { RouteNotFound } from './middlewares/notFound'
import { requestLogger } from './middlewares/requestLogger'
import { logger } from '../dependencies/logger/logger.container'
// import { ErrorHandler } from './middlewares/ErrorHandler'

interface ServerOptions {
  port: number
  ip?: string
  routes: Router
}

export class AppServer {
  private readonly app = express()
  public async start (options: ServerOptions): Promise<void> {
    const { port, routes } = options
    // Middlewares
    this.setupMiddlewares()
    // Rutas
    this.setupRoutes(routes)
    this.app.listen(port, () => {
      console.log(`App escuchando en http://localhost:${port}`)
    })
  }

  private setupRoutes (routes: Router): void {
    this.app.use(ApiConfig.SERVER.URL_PREFIX, routes)
    this.app.use(errorHandler)
    this.app.use('*', RouteNotFound)
  }

  private setupMiddlewares (): void {
    // Aquí irán todos los middlewares, aunque el de errores siempre va al último (en teoría creo)
    this.app.use(express.json())
    this.app.use(cors())
    ApiConfig.SERVER.NODE_ENV === 'debug' && this.app.use(requestLogger(logger))
  }
}
