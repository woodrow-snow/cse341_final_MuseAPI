const mongo = require('../database/database');
const { ObjectId } = require('mongodb');

const albumModel ={}

const getDB = () => 
{
    return mongo.getDatabase().db().collection('album');
}

albumModel.getAllAlbums = async function (){
    return await getDB().find().toArray();
}

albumModel.getAlbumById = async function (id){
    return await getDB().findOne({_id: id});
}

albumModel.createAlbum = async function (album) {
    return await getDB().insertOne({
        name: album.name,
        songs: album.songs,
        songs_total: album.songs_total,
        total_listen_time_in_sec: album.total_listen_time_in_sec
    });
};

module.exports = { albumModel };
