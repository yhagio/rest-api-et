import rawConfig from './config';

const ENV = process.env.NODE_ENV || 'development';

// TODOs
// Change JSON to JS/TS and use environmental variables
// for safety especially for production
export default rawConfig[ENV];
