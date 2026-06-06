/* ***********************************************
 * Securely connect to MongoDB Atlas  | dotenv
 * *********************************************** */
const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');
let db;
const initDatabase = async (callback) => {
    if (db) {
        console.warn('Trying to init DB again!');
        return callback(null, db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            db = client;
            callback(null, db);
        })
        .catch((err) => {
            callback(err);
        });
};
const getDatabase = () => {
    if (!db) {
        throw Error('Database not initialized');
    }
    return db;
};

module.exports = {
    initDatabase,
    getDatabase
};