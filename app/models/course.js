const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Course Model
 */
class CourseModel extends autoload('crudModel') {

    constructor() {
        super();
        this.metaData = autoload('courseMetaData');
    }

}

module.exports = CourseModel;