/* ***********************************************
 * Song Model
 * *********************************************** */
const songSchema = {
    name: String,
    len_in_sec: Number,
    len_in_min: Number,
    artist_id: String,
    album_id: String,
    playlists_in: [String]
};

// require statements
const songModel = {};
const mongo = require('../database/database');

const getDB = () => {
    return mongo.getDatabase().db().collection('song');
};

songModel.getSongById = async function (id) {
    return await getDB().findOne({ _id: id});
};

songModel.updateSongById = async function (id, updatedSong) {
    const ogSong = await this.getSongById(id);

    const results = await getDB().updateOne(
        { _id: id },
        {
            $set: {
                name: updatedSong.name ?? ogSong.name,
                len_in_sec: updatedSong.len_in_sec ?? ogSong.len_in_sec,
                len_in_min: updatedSong.len_in_min ?? ogSong.len_in_min,
                artist_id: updatedSong.artist_id ?? ogSong.artist_id,
                album_id: updatedSong.album_id ?? ogSong.album_id,
                playlists_in: updatedSong.playlists_i ?? ogSong.playlists_in
            }
        }
    );

    return results;
};

module.exports = { songSchema, songModel};