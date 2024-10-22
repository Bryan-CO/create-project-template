interface ServerConfig {
  NODE_ENV: string
  PORT: number
  VERSION: string
  JWT_KEY_SECRET: string
  URL_PREFIX: string
}

interface DatabaseConfig {
  HOST: string
  PORT: number
  USERNAME: string
  PASSWORD: string
  DATABASE: string
  INSTANCE_NAME: string
}
interface AppConfig {
  SERVER: ServerConfig
  DATABASE: DatabaseConfig
}

const ApiConfig: AppConfig = {
  SERVER: {
    NODE_ENV: process.env.NODE_ENV?.trim() ?? 'development',
    PORT: Number(process.env.SERVER_PORT ?? 10245),
    VERSION: process.env.SERVER_VERSION?.trim() ?? 'v1',
    JWT_KEY_SECRET: process.env.JWT_KEY_SECRET?.trim() ?? 'a12d32344df42323',
    URL_PREFIX: process.env.SERVER_URL_PREFIX?.trim() ?? '/api'
  },
  DATABASE: {
    HOST: process.env.DB_HOST ?? '127.0.0.1',
    PORT: Number(process.env.DB_PORT ?? 1433),
    USERNAME: process.env.DB_USERNAME ?? 'user',
    PASSWORD: process.env.DB_PASSWORD ?? 'admin',
    DATABASE: process.env.DB_DATABASE ?? 'bd_prueba',
    INSTANCE_NAME: process.env.DB_INSTANCE_NAME ?? 'MSSQLSERVER'
  }
}

export { ApiConfig }
