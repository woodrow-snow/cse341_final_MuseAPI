const playlistModel = {};
const mongo = require('../database/database');
const getDB = () => {
    return mongo.getDatabase().db().collection('playlist');
};


playlistModel.getAllPlaylists = async () => {
    return await getDB().find().toArray();
}

module.exports = playlistModel;