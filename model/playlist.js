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

playlistModel.updatePlaylistById = async function (id, updatedPlaylist) {
    const ogPlaylist = await this.getPlaylistById(id);

    const results = await getDB().updateOne(
        { _id: id },
        {
            $set: {
                "name": updatedPlaylist.name ?? ogPlaylist.name,
                "songs": updatedPlaylist.songs ?? ogPlaylist.songs,
                "songs_total": updatedPlaylist.songs_total ?? ogPlaylist.songs_total,
                "total_listen_time_in_sec": updatedPlaylist.total_listen_time_in_sec ?? ogPlaylist.total_listen_time_in_sec
            }
        }
    );

    return results;
}

playlistModel.deletePlaylistById = async function (id) {
    const results = await getDB().deleteOne({ _id: id });
    return results;
}

module.exports = { playlistModel };