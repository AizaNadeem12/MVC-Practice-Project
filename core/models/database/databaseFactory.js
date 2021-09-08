/**
 * Class for creating database
 */
class DatabaseFactory {

    /**
     * @property {Function} getDriver Method that creates an instance of the driver to be returned.
     * @param {string} name - String value of driver name
     * @returns {Object} - Driver to be used.
     */
    getDriver() {
        try {
            let driver = require(`${process.env.ROOT}/core/models/database/driver/${process.env.DB_NAME}/driver`).getInstance();
            return driver;
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} getQuerBuilder Method that creates an instance of the query builder to be returned.
     * @param {string} name - String value of query builder name
     * @returns {Object} - Query Builder to be used.
     */
     getQueryBuilder() {
        try {
            return new (require(`${process.env.ROOT}/core/models/database/driver/${process.env.DB_NAME}/queryBuilder`));
        }
        catch (err) {
            throw new Error(err);
        }
    }

    

}

module.exports = DatabaseFactory;