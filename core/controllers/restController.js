const autoload = require(`${process.env.ROOT}/core/autoload`);
let viewManager = autoload('viewManager');

/**
 * RestController takes care of mapping request action to the defined request handler method.
 */
class RestController {

    /**
     * @property {Function} callAction Method that specifies that action to be taken based on Request
     * @param {string} controllerName - String value of controller name
     * @returns {Object} - Response Object
     */
    /* istanbul ignore next */
    callAction(controllerName) {
        try {
            let actionName = autoload('request').getAction();
            if (actionName === undefined) {
                actionName = 'defaultView';
            }
            let methodName = `${actionName}`;
            return this[methodName](controllerName, actionName);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} getModel Method that creates a model
     * @param {string} controller - String value of controller name
     * @returns {Object} - Model object to be used
     */
    /* istanbul ignore next */
    getModel(controller) {
        try {
            return autoload('modelFactory').createModel(controller);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} getRequestParams Method for getting Request object parameters
     * @returns {Object} - Parameters of Request object
     */
    /* istanbul ignore next */
    getRequestParams() {
        return autoload('request').getParams();
    }

    /**
     * @property {Function} getView Method that returns the view based on specified controller and ation
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    /* istanbul ignore next */
    getView(controller, action) {
        return viewManager.getView(controller, action);
    }

    /**
     * @property {Function} defaultView Method that shows us default view based on controller specified
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    defaultView(controller, action) {
        try {
            return this.getView(controller, action);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} create Method that shows us create view based on controller specified
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    create(controller, action) {
        try {
            this.getModel(controller).create(this.getRequestParams());
            return this.getView(controller, action);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} read Method that shows us list of data based on controller specified
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    read(controller, action) {
        try {
            let listData = this.getModel(controller).read(this.getRequestParams());
            viewManager.setData(listData);
            return this.getView(controller, 'listData');
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} update Method that shows us update view based on controller specified
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    update(controller, action) {
        try {
            this.getModel(controller).update(this.getRequestParams());
            return this.getView(controller, action);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @property {Function} delete Method that shows us delete view based on controller specified
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    delete(controller, action) {
        try {
            this.getModel(controller).delete(this.getRequestParams());
            return this.getView(controller, action);
        }
        catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = RestController