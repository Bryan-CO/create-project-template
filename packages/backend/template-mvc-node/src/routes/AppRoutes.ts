import { Router } from 'express'

const AppRouter = Router()
AppRouter.use('/test', (req, res) => {
  res.send('Hola mundo desde el servidor')
})
export default AppRouter
