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

module.exports = songSchema;