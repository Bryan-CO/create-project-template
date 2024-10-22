import { ApiConfig } from './config/EnvConfig'
import { AppRoutes } from './infrastructure/http/AppRouter'
import { AppServer } from './infrastructure/http/server'

(() => {
  console.log('Running in:', ApiConfig.SERVER.NODE_ENV)
  void executeServer()
})()

async function executeServer (): Promise<void> {
  // Probar conexion antes de iniciar el servidor
  // await new DatabaseClient().testConnection()

  const server = new AppServer()
  await server.start({
    port: ApiConfig.SERVER.PORT,
    routes: AppRoutes.getRoutes()
  })
}
