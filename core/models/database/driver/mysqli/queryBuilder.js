/**
 * Class that build a query based on Request's object parameters
 */
class QueryBuilder {

    /**
     * @property {Function} create Method responsible for generating create query
     * @param {Object} params - Request object parameters (Data to be inserted in database)
     * @returns {string} - String value of query
     */
    create(params) {
        let sql = `INSERT INTO ${params.table_name}(`;
        let keys = '', values = '';
        Object.keys(params).map((key) => {
            if (key != 'table_name' && key != 'id' && params[key].trim() != '') {
                keys += `${key},`;
                values += `'${params[key]}',`
            }
        });
        keys = keys.substring(0, keys.length - 1);
        values = values.substring(0, values.length - 1);
        sql += `${keys}) VALUES (${values})`;
        return sql;
    }

    /**
     * @property {Function} read Method responsible for generating list Data query
     * @param {Object} params - Request object parameters (Data to be read from database)
     * @returns {string} - String value of query
     */
    read(params) {
        let sql = `SELECT * FROM ${params.table_name}`;
        return sql;
    }

    /**
     * @property {Function} update Method responsible for generating update query
     * @param {Object} params - Request object parameters (Data to be updated in database)
     * @returns {string} - String value of query
     */
    update(params) {
        let sql = `UPDATE ${params.table_name} SET `;
        Object.keys(params).map((key) => {
            if (key != 'table_name' && key != 'id') {
                sql += `${key} = '${params[key]}',`;
            }
        });
        sql = sql.substring(0, sql.length - 1);
        sql += ` WHERE id = ${params.id}`;
        return sql;
    }

    /**
     * @property {Function} delete Method responsible for generating delete query
     * @param {Object} params - Request object parameters (Data to be deleted from database)
     * @returns {string} - String value of query
     */
    delete(params) {
        let sql = `DELETE FROM ${params.table_name} WHERE id = ${params.id}`;
        return sql;
    }
}


module.exports = QueryBuilder;