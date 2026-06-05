/* ***********************************************
 * required Statements
 * *********************************************** */
const express = require('express');
const cors = require('cors');

// creating application
const app = express();

/* ***********************************************
 * required Statements
 * *********************************************** */
app.use(express.json());
app.use(cors());

/* ***********************************************
 * Starting server
 * *********************************************** */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('API started on: ' + port);
});