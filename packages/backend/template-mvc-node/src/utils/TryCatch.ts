import { NextFunction, Request, RequestHandler, Response } from 'express'

// eslint-disable-next-line
export class TryCatch {
  public static handler (controller: (req: Request, res: Response, next: NextFunction) => Promise<void>): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await controller(req, res, next)
      } catch (error) {
        next(error)
      }
    }
  }
}
