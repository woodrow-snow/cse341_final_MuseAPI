const model = {}
const mongo = require('../database/database');

const getDB = () => {
    return mongo.getDatabase().db().collection('album');
};

model.getAllAlbums = async () => {
    return await getDB().find().toArray();
}

module.exports = model;