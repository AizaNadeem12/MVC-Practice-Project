var MySql = require('sync-mysql');

/**
 * Class for creating SQL connection and executing the query
 */
class Driver {

    constructor() {
        /**
         * @property {Object} connection Driver connection
         */
        this.connection = new MySql({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        });
    }

    /**
    * @property {Function} getInstance Static method to create instance of Singleton class
    * @returns {Object} - Instance of Driver class
    */
    static getInstance() {
        if (!this._instance) {
            this._instance = new Driver();
        }
        return this._instance;
    }

    /**
     * @property {Function} executeQuery Method for executing SQL query using SQL connection object
     * @param {string} query - Query to be executed
     * @returns {Object} - Query result
     */
    executeQuery(query) {
        try {
            return this.connection.query(query);
        }
        catch (err) {
            throw err;
        }
    }

}

module.exports = Driver;