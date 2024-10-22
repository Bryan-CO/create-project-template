import { Router } from 'express'
import { PumpRouter } from './routes/pump/pumpRouter'

// eslint-disable-next-line
export class AppRoutes {
  static getRoutes (): Router {
    const router = Router()
    router.use('/pump', PumpRouter.getRoutes())
    return router
  }
}
