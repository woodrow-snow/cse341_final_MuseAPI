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


module.exports = { albumModel };
