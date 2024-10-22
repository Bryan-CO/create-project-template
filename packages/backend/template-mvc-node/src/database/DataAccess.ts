import { DatabaseConnection } from './DatabaseConnection'

// eslint-disable-next-line
export class DataAcess {
  static async executeProcedure ({ nameProcedure, parameters, type = 'SELECT' }: { nameProcedure?: string, parameters?: any[], type?: string }): Promise<any> {
    // eslint-disable-next-line
    if (!nameProcedure) {
      throw new Error('Procedure name is required')
    }

    let paramCount = 1
    // eslint-disable-next-line
    const params = parameters ? `(${parameters?.map(() => `$${paramCount++}`).join(', ')})` : '()'

    /* FALTA PENSAR CUAL SERÁ LA OPCION POR DEFECTO */

    let typeQuery = ''
    // eslint-disable-next-line
    if (type === 'SELECT' || !type) {
      typeQuery = 'SELECT * FROM'
    } else {
      typeQuery = 'CALL'
    }

    const query = `${typeQuery} ${nameProcedure}${params};`
    const result = (await new DatabaseConnection().con.query(query, parameters)).rows
    return result
  }
}
