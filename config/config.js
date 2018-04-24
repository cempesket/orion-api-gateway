const appConfig = require('./config.json');
const adConfig = require('./azuread.config.json');

const envVar = process.env.NODE_ENV || 'development';

module.exports.credentials = adConfig;


const envConfig = appConfig[envVar];
Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
});





