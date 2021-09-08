/**
 * Class for creating model
 */
class ModelFactory {

    /**
     * @property {Function} createModel Method that creates an instance of the model to be returned.
     * @param {string} modelName - String value of model name
     * @returns {Object} - Model to be used.
     */
    createModel(modelName) {
        try {
            return new (require(`${process.env.ROOT}/app/models/${modelName}`));
        }
        catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = ModelFactory;