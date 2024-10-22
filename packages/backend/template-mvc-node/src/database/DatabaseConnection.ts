import { Pool } from 'pg'
import logger from '../logger/logger'
import { ApiConfig } from '../config/EnvConfig'
export class DatabaseConnection {
  con: Pool
  constructor () {
    this.con = new Pool({
      user: ApiConfig.DATABASE.USERNAME,
      password: ApiConfig.DATABASE.PASSWORD,
      host: ApiConfig.DATABASE.HOST,
      database: ApiConfig.DATABASE.DATABASE,
      // ssl: ApiConfig.SERVER.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      connectionTimeoutMillis: 20000
    })
  }

  async testConnection (): Promise<void> {
    try {
      await this.con.connect()
      // eslint-disable-next-line
      logger.info(`${process.env.DB_DATABASE?.toUpperCase()} database connection successful`)
    } catch (err) {
      // eslint-disable-next-line
      logger.error(`${process.env.DB_DATABASE?.toUpperCase()} database connection error. Message: ${err}`)
      process.exit(1)
    }
  }
}
