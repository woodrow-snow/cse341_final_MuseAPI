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

playlistModel.createPlaylist = async function (playlist) {
    return await getDB().insertOne({
        name: playlist.name,
        songs: playlist.songs,
        songs_total: playlist.songs_total,
        total_listen_time_in_sec: playlist.total_listen_time_in_sec
    });
};

module.exports = { playlistModel };