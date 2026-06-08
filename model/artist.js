/* ***********************************************
 * Artist Model
 * *********************************************** */
const artistSchema = {
    name: String,
    songs: [String],
    albums: [String],
    listeners: Number
};

const artistModel = {};
const mongo = require('../database/database');
const getDB = () => {
    return mongo.getDatabase().db().collection('artist');
};


artistModel.createArtist = async function (artist) {

    const newArtist = await getDB().insertOne({
        "name": artist.name,
        "songs": artist.songs,
        "album": artist.album,
        "listeners": artist.listeners
    });
    return newArtist;
}

artistModel.updateArtistById = async function (id, updatedArtist) {
    // getting og artist informaiton 
    const ogArtist = this.getArtistById(id);

    const results = await getDB().updateOne(
        { _id: id },
        {
            $set: {
                "name": updatedArtist.name ?? ogArtist.name,
                "songs": updatedArtist.songs ?? ogArtist.songs,
                "album": updatedArtist.album ?? ogArtist.album,
                "listeners": updatedArtist.listeners ?? ogArtist.listeners
            }
        }
    );

    return results;
}

artistModel.getArtistById = async function (id) {
    return await getDB().findOne({ _id: id });
}

artistModel.deleteArtistById = async function (id) {
    const results = await getDB().deleteOne({ _id: id });
    return results;
}



module.exports = { artistSchema, artistModel };