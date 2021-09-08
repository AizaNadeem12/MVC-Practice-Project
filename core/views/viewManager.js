const fs = require("fs");
const mustache = require('mustache');
const autoload = require(`${process.env.ROOT}/core/autoload`);

/**
 * Class responsible for reading and rendering of views and sending the response back to RestController
 */
class ViewManager {

    /**
     * @property {Function} getView Method for reading html from desired file and then rendering it using mustache and then setting the response object
     * @param {string} controller - String value of controller name
     * @param {string} action - String value of action name
     * @returns {Object} - Response Object
     */
    getView(controller, action) {
        const filedata = fs.readFileSync(`${process.env.ROOT}/app/views/${controller}/${action}.html`, { encoding: 'utf8' });
        let response = autoload('response');
        response.setResponse(200, { 'Content-Type': 'text/html' }, mustache.render(filedata, this.listData));
        return response;
    }

    /**
     * @property {Function} setData Method for setting listData member to query(data) template
     * @param {Object} data - Query result object
     */
    setData(data) {
        this.listData = { data: [] };
        this.listData.data = data;
    }

}

module.exports = ViewManager;