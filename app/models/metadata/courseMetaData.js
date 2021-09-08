/**
 * Class for creating Course MetaData
 */
class CourseMetaData {

    /**
     * @property {Function} setParams Method for setting Course MetaData
     * @param {Object} params - Request object parameters
     */
    setParams(params) {
        this.table_name = 'Course';
        this.id = params.id;
        this.name = params.name;
    }

}

module.exports = CourseMetaData;