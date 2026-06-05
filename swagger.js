/* ***********************************************
 * Swagger Configuration
 * *********************************************** */
const swaggerJsdoc = require('swagger-jsdoc');

/* ***********************************************
 * Swagger Options
 * *********************************************** */
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Muse API',
            version: '1.0.0',
            description: 'Music API'
        }
    },
    apis: ['./routes/*.js']
};

/* ***********************************************
 * Export Swagger Specification
 * *********************************************** */
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;