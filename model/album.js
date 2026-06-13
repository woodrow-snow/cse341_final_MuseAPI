const model = {}
const mongo = require('../database/database');

const getDB = () => {
    // testing
    console.log("In getDB...");
    return mongo.getDatabase().db().collection('album');
};

model.getAllAlbums = async () => {
    // testing
    console.log("In getAll...");
    return await getDB().find().toArray();
}

module.exports = model;