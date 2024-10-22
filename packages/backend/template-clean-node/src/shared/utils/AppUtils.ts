import { format } from 'date-fns'

// eslint-disable-next-line
export class AppUtils {
  static getDateTime (): string {
    try {
      const fechaHoraActual = new Date()
      const fechaHoraFormateada = format(
        fechaHoraActual,
        "yyyy-MM-dd'T'HH:mm:ss.SSS"
      )
      return fechaHoraFormateada
    } catch (error) {
      return ''
    }
  }
}
