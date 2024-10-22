import { ApiConfig } from './config/EnvConfig'
import { startServer } from './server'

console.log('Running in:', ApiConfig.SERVER.NODE_ENV)
void startServer()
