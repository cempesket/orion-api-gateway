const passport = require('passport');
const {authenticationBearerStrategy,authenticationOIDCStrategy} = require('./auth.config');

//passport.use('azuread-openidconnect',authenticationOIDCStrategy);
passport.use('oauth-bearer',authenticationBearerStrategy);