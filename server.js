/* ***********************************************
 * required Statements
 * *********************************************** */
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const mongodb = require('./database/database');
const passport = require('passport');
const session = require('express-session');
const GithubStrategy = require('passport-github2').Strategy;
require('dotenv').config();

/* ***********************************************
 * creating application
 * *********************************************** */
const app = express();

/* ***********************************************
 * Middleware
 * *********************************************** */
app.use(express.json());
app.use(cors());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);
// basic express session init
app.use(passport.initialize());
// init passport on ever route call
app.use(passport.session());
// allow passport to use "express-session"
app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader(
         'Access-Controll-Allow-Headers',
         'Origin, X-Requested-With, Content-Type, Accept, Z-key, Authorization'
    );
    res.setHeader('Access-Controll-Allow-Methods', 'POST, GET, PUT, PATCH, OPTIONS, DELETE');
    next();
})

passport.use(
    new GithubStrategy(
        {
            clientID:
                process.env.ENV_TYPE === 'dev'
                    ? process.env.GITHUB_CLIENT_ID_DEV
                    : process.env.GITHUB_CLIENT_ID,
            clientSecret:
                process.env.ENV_TYPE === 'dev'
                         ? process.env.GITHUB_CLIENT_SECRET_DEV
                         : process.env.GITHUB_CLIENT_SECRET,
               callbackURL:
                    process.env.ENV_TYPE === 'dev'
                         ? process.env.CALLBACK_URL_DEV
                         : process.env.CALLBACK_URL
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
          }
    )
);

passport.serializeUser((user, done) => {
     done(null, user);
});
passport.deserializeUser((user, done) => {
     done(null, user);
});

/* ***********************************************
 * Swagger Documentation
 * *********************************************** */
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

/* ***********************************************
 * Routes
 * *********************************************** */
app.use('/song', require('./routes/songs'));
app.use('/artist', require('./routes/artists'));
app.use('/playlist', require('./routes/playlist'));
app.use('/album', require('./routes/album'));

app.get('/', (req, res) => {
     res.send(
          req.session.user !== undefined
               ? `You are logged in as ${req.session.user.displayName}`
               : "You aren't logged in!"
     );
});

app.get(
     '/github/callback',
     passport.authenticate('github', {
          failureRedirect: '/api-docs',
          session: false
     }),
     (req, res) => {
          req.session.user = req.user;
          res.redirect('/');
     }
);

app.get('/login', passport.authenticate('github'), (req, res) => {});

app.get('/logout', function (req, res, next) {
     req.logout(function (err) {
          if (err) {
               return next(err);
          }
          res.redirect('/');
     });
});

/* ***********************************************
 * Starting server
 * *********************************************** */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('API started on: ' + port);
});

/* ***********************************************
 * Connecting to the database
 * *********************************************** */
mongodb.initDatabase((err, db) => {
    if (err) {
        console.error('Failed to connect to the database.');
        console.error(err);
    } else {
        console.log('Database initialized');
    }
});