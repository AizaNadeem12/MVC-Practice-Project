const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class for creating Teacher Model
 */
class TeacherModel extends autoload('crudModel') {

    constructor() {
        super();
        this.metaData = autoload('teacherMetaData');
    }

}

module.exports = TeacherModel;