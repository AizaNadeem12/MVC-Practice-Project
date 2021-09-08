/**
 * It is the response made by a server to a client
 */
class Response {

    /**
     * @property {Function} setResponse Method to set members of Response class
     * @param {number} status - Response Status Code
     * @param {Object} ContentType - Response Content-Type
     * @param {html} data - Response HTML
     */
    setResponse(status, ContentType, data) {
        this.status = status;
        this.ContentType = ContentType;
        this.html = data;
    }

    /**
     * @property {Function} getResponse Method that will return html response
     * @returns {html} - Response HTML
     */
    getResponse() {
        return this.html;
    }

    /**
     * @property {Function} getStatus Method that will return response status code
     * @returns {number} - Response Status Code
     */
    getStatus() {
        return this.status;
    }

    /**
     * @property {Function} getContentType Method that will return response content-type
     * @returns {Object} - Response Content-Type
     */
    getContentType() {
        return this.ContentType;
    }

}

module.exports = Response;