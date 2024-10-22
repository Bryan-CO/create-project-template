import { Router } from 'express'

// eslint-disable-next-line
export class PumpRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', (req, res) => {
      res.send('PUMP!')
    })
    return router
  }
}
