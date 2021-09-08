const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class that will run the application
 */
class App {

    /**
     * @property {Function} run Method that creates the dispatcher and calls its dispatch request function
     * @returns {Object} - Response Object
     */
    run() {
        try {
            return autoload('dispatcher').dispatchRequest();
        }
        catch (err) {
            //console.log(err);
        }
    }

}

module.exports = App;
