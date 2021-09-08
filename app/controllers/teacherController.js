const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Teacher controller
 */
class TeacherController extends autoload('restController') {

    constructor() {
        super();
    }

}

module.exports = TeacherController;