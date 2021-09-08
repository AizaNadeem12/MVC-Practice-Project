const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Dispatcher class forwards request to specific controller for processing.
 */
class Dispatcher {

    /**
     * @property {Function} dispatchRequest - Creates a controller and call its callAction function
     * @returns {Object} - Response Object
     */
    dispatchRequest() {
        let controllerName = autoload('request').getController();
        if (controllerName === undefined) {
            controllerName = 'default';
        }
        try {
            let controller = autoload('controllerFactory').createController(controllerName);
            return controller.callAction(controllerName);
        }
        catch(err) {
            let controller = autoload('controllerFactory').createController('error');
            return controller.loadView();
        }
    }

}

module.exports = Dispatcher