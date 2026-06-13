const mongo = require('../database/database');
const { ObjectId } = require('mongodb');

const playlistModel ={}

const getDB = () => {
    return mongo.getDatabase().db().collection('playlist');
};

playlistModel.getAllPlaylists = async function () {
    return await getDB().find().toArray();
}

playlistModel.getPlaylistById = async function (id) {
    return await getDB().findOne({_id: id});
}


module.exports = { playlistModel };