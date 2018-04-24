const express = require('express');
const passport = require('passport');
const config = require('./auth/passport.config');


const app = express();

app.use(passport.initialize(null));
app.use(passport.session(null));

app.listen(3000, () => {
    console.log('Listening on 3000')
});
