import express from 'express'
import cors from 'cors'
import { ApiConfig } from './config/EnvConfig'
import { errorHandler } from './middlewares/errorHandler'
import { RouteNotFound } from './middlewares/notFoundHandler'
import AppRouter from './routes/AppRoutes'
import { requestLogger } from './middlewares/requestLogger'

// Variables y/o constantes
const app = express()

// Middlewares
app.use(express.json())

// POR EL MOMENTO
app.use(cors())

ApiConfig.SERVER.NODE_ENV === 'debug' && app.use(requestLogger())
// Rutas
app.use(ApiConfig.SERVER.URL_PREFIX, AppRouter)

app.use(errorHandler)
app.use(RouteNotFound)

// Servidor

export default app
