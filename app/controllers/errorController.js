const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Error controller
 */
class ErrorController {

    /**
     * @property {Function} loadView Method that give us view in case of any error
     * @returns {Object} - Error Response Object
     */
    loadView () {
        return autoload('viewManager').getView('error', 'error');
    }

}

module.exports = ErrorController;