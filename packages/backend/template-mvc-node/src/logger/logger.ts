import winston from 'winston'
import path from 'node:path'

const timestampFormat = winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  // eslint-disable-next-line
  return `${timestamp} [${level}]: ${message}`
})

const logger = winston.createLogger({
  level: 'info', // Nivel mínimo de logs
  format: winston.format.combine(
    timestampFormat,
    customFormat
  ),
  transports: [
    // Transportar logs a la consola
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        customFormat
      )
    }),
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/App-Reports.log'),
      maxsize: 3 * 1024 * 1024,
      maxFiles: 3
    })
  ]
})

export default logger
