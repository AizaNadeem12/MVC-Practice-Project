const url = require('url');
const qs = require('querystring');

/**
 * Singleton class for the instantiation of Request object. 
 */
class Request {

  constructor()
  {
    /**
     * @property {string} controller - Request's Controller
     */
    this.controller = null;

    /**
     * @property {string} action - Request's Action
     */
    this.action = null;

    /**
     * @property {Object} params- Request's Parameters
     */
    this.params = null;
  }

  /**
   * @property {Function} getInstance Static method to create instance of Singleton class
   * @returns {Object} - Instance of Request class
   */
  static getInstance() {
    if (!this._instance) {
      this._instance = new Request();
    }
    return this._instance;
  }

  /**
   * @property {Function} getController Method that returns controller of Request object
   * @returns {string} - Controller
   */
  getController() {
    return this.controller;
  }

  /**
   * @property {Function} getAction Method that returns action of Request object
   * @returns {string} - Action
   */
  getAction() {
    return this.action;
  }

  /**
   * @property {Function} getParams Method that returns parametrs of Request object
   * @returns {Object} - Parameters
   */
  getParams() {
    return this.params;
  }

  /**
   * @property {Function} init Initialize Request Object
   * @param {Object} req - Request Object
   * @returns {Promise} - Promise Object that shows that request object has been successfully instantiated
   */
  init(req) {
    const urlObject = url.parse(req.url, true);
    this.controller = urlObject.query.controller;
    this.action = urlObject.query.action;
    var myPromise = new Promise((resolve, reject) => {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      })
      req.on('end', () => {
        this.params = qs.parse(body);
        resolve('Success');
      })
    })
    return myPromise;
  }

}

module.exports = Request;