const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Student Model
 */
class StudentModel extends autoload('crudModel') {

    constructor() {
        super();
        this.metaData = autoload('studentMetaData');
    }

}

module.exports = StudentModel;