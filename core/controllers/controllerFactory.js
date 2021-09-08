const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating controller
 */
class ControllerFactory {

    /**
     * @property {Function} createController Method that creates an instance of the controller to be returned.
     * @param {string} controllerName - String value of controller name
     * @returns {Object} - Controller to be used.
     */
    createController(controllerName) {
        try {
            return new (require(`${process.env.ROOT}/app/controllers/${controllerName}Controller`));
        }
        catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = ControllerFactory;