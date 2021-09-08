/**
 * Class for creating Teacher MetaData
 */
class TeacherMetaData {

     /**
     * @property {Function} setParams Method for setting Teacher MetaData
     * @param {Object} params - Request object parameters
     */
    setParams(params) {
        this.table_name = 'Teacher';
        this.id = params.id;
        this.first_name = params.firstname;
        this.last_name = params.lastname;
    }

}

module.exports = TeacherMetaData;