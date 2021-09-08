/**
 * Class for creating Student MetaData
 */
class StudentMetaData {

     /**
     * @property {Function} setParams Method for setting Student MetaData
     * @param {Object} params - Request object parameters
     */
    setParams(params) {
        this.table_name = 'Student';
        this.id = params.id;
        this.first_name = params.firstname;
        this.last_name = params.lastname;
    }

}

module.exports = StudentMetaData;