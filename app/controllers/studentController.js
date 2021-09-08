const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Student controller
 */
class StudentController extends autoload('restController') {

    constructor() {
        super();
    }

}

module.exports = StudentController;