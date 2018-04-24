const BearerStrategy = require('passport-azure-ad').BearerStrategy;
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const config = require('../config/config');


const strategyOptions = {
    callbackURL: config.credentials.returnURL,
    clientID: config.credentials.clientID,
    oidcIssuer: config.credentials.issuer,
    passReqToCallback: true,
    identityMetadata: config.credentials.identityMetadata,
    responseType: config.credentials.responseType,
    responseMode: config.credentials.responseMode
};
const authenticationBearerStrategy = new BearerStrategy(strategyOptions, (token, done) => {
});
// const authenticationOIDCStrategy = new OIDCStrategy(strategyOptions,
//     (done) => {
//     return done();
//     });

module.exports = {authenticationBearerStrategy};
