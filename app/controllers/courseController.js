const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Course controller
 */
class CourseController extends autoload('restController') {

    constructor() {
        super();
    }

}

module.exports = CourseController;