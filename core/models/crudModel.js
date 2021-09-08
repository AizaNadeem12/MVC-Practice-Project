const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * CrudModel is responible of create, read, update and delete operations in database
 */
class CrudModel {

    /**
     * @property {Function} getMetaData Method for returning model's metaData
     * @returns {Object} - MetaData Object of specific Model
     */
    /* istanbul ignore next */
    getMetaData() {
        return this.metaData;
    }

    /**
     * @property {Function} getDriver Method for creating and returning driver from Database Factory
     * @returns {Object} - Driver Object of specific database from Database Factory
     */
    /* istanbul ignore next */
    getDriver() {
        return autoload('databaseFactory').getDriver();
    }

    /**
     * @property {Function} getQueryBuilder Method for creating and returning query builder from Database Factory
     * @returns {Object} - QueryBuilder Object of specific database from Database Factory
     */
    /* istanbul ignore next */
    getQueryBuilder() {
        return autoload('databaseFactory').getQueryBuilder();
    }

    /**
     * @property {Function} create Method for setting model's metaData, then creating and running create query
     * @param {Object} params - Parameters from Request's object
     * @returns {Object} - Query result
     */
    create(params) {
        try {
            this.getMetaData().setParams(params);
            if (Object.entries(params).length != 0) {
                let query = this.getQueryBuilder().create(this.getMetaData());
                return this.getDriver().executeQuery(query);
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
    * @property {Function} read Method for setting model's metaData, then creating and running list Data query
    * @param {Object} params - Parameters from Request's object
    * @returns {Object} - Query result
    */
    read(params) {
        try {
            this.getMetaData().setParams(params);
            let query = this.getQueryBuilder().read(this.getMetaData());
            return this.getDriver().executeQuery(query);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
    * @property {Function} update Method for setting model's metaData, then creating and running update query
    * @param {Object} params - Parameters from Request's object
    * @returns {Object} - Query result
    */
    update(params) {
        try {
            if (Object.entries(params).length != 0) {
                this.getMetaData().setParams(params);
                let query = this.getQueryBuilder().update(this.getMetaData());
                return this.getDriver().executeQuery(query);
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
    * @property {Function} delete Method for setting model's metaData, then creating and running delete query
    * @param {Object} params - Parameters from Request's object
    * @returns {Object} - Query result
    */
    delete(params) {
        try {
            if (Object.entries(params).length != 0) {
                this.getMetaData().setParams(params);
                let query = this.getQueryBuilder().delete(this.getMetaData());
                return this.getDriver().executeQuery(query);
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = CrudModel;
