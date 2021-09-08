var fs = require('fs');
var path = require('path');
let files = {};
let excluded_files = ['.nyc_output', 'coverage', 'cypress', 'docs', 'node_modules', 'test', '.gitignore', '.gitlab-ci.yml', '.git', 'config.js', 'server.js'];

/**
 * Singleton class for the instantiation of Autolad object. 
 */
class Autoload {

    /**
     * @property {Function} getInstance Static method to create instance of Singleton class
     * @returns {Object} - Instance of Autoload class
     */
    static getInstance() {
        if (!this._instance) {
            this._instance = new Autoload();
            this.getFiles(process.env.ROOT);
        }
        return this._instance;
    }

    /**
     * @property {Function} getFiles - Traversing the current working directory recursively to get all files in the form of key value pairs where key is the filename and value is the filepath.
     * @param {string} dirPath - Name of our project's current working directory
     */
    static getFiles(dirPath) {
        fs.readdirSync(dirPath).forEach(function (file) {
            let filepath = path.join(dirPath, file);
            if (!excluded_files.includes(file)) {
                let stat = fs.statSync(filepath);
                if (stat.isDirectory()) {
                    Autoload.getFiles(filepath);
                } else {
                    let filename = file.split(".js");
                    files[filename[0]] = filepath;
                }
            }
        });
    }

    /**
     * @property {Function} autoloadFile -An autoload for returning appropriate files.
     * @param {string} name - Name of file to be autoloaded.
     * @returns {Object} - Object of the file
     */
    autoloadFile(name) {
        if (name === 'crudModel' || name == 'restController') {
            return require(`${files[name]}`);
        }
        else if (name === 'request') {
            return require(`${files[name]}`).getInstance();
        }
        else {
            return (new (require(`${files[name]}`)));
        }
    }
}

/**
 * @property {Function} autoload It simply imports a bunch of files, and then exports them all in an object
 * @param {string} name - Class name to be instantiated
 * @returns {Object} - Class object or instance
 */
function autoload(name) {
    let autoload = Autoload.getInstance();
    return autoload.autoloadFile(name);
}

module.exports = autoload;