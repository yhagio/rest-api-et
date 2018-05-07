const rawConfig = require('./config.json'); /* tslint:disable-line:no-var-requires */

const ENV = process.env.NODE_ENV || 'development';

export default rawConfig[ENV];
