const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Default controller
 */
class DefaultController extends autoload('restController') {

    constructor() {
        super();
    }

}

module.exports = DefaultController;