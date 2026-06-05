/* ***********************************************
 * required Statements
 * *********************************************** */
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./swagger');

/* ***********************************************
 * creating application
 * *********************************************** */
const app = express();

/* ***********************************************
 * Middleware
 * *********************************************** */
app.use(express.json());
app.use(cors());

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

/* ***********************************************
 * Starting server
 * *********************************************** */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('API started on: ' + port);
});