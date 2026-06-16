const mongo = require('../database/database');
const { ObjectId } = require('mongodb');

const albumModel = {}

const getDB = () => {
    return mongo.getDatabase().db().collection('album');
}

albumModel.getAllAlbums = async function () {
    return await getDB().find().toArray();
}

albumModel.getAlbumById = async function (id) {
    return await getDB().findOne({ _id: id });
}

albumModel.createAlbum = async function (album) {
    return await getDB().insertOne({
        name: album.name,
        songs: album.songs,
        songs_total: album.songs_total,
        total_listen_time_in_sec: album.total_listen_time_in_sec
    });
};

albumModel.updateAlbumById = async function (id, updatedAlbum) {
    // getting og album information 
    const ogAlbum = await this.getAlbumById(id);

    const results = await getDB().updateOne(
        { _id: id },
        {
            $set: {
                "name": updatedAlbum.name ?? ogAlbum.name,
                "songs": updatedAlbum.songs ?? ogAlbum.songs,
                "songs_total": updatedAlbum.songs_total ?? ogAlbum.songs_total,
                "total_listen_time_in_sec": updatedAlbum.total_listen_time_in_sec ?? ogAlbum.total_listen_time_in_sec
            }
        }
    );

    return results;
}

albumModel.deleteAlbumById = async function (id) {
    const results = await getDB().deleteOne({ _id: id });
    return results;
}

module.exports = { albumModel };