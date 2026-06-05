/* ***********************************************
 * Artist Model
 * *********************************************** */
const artistSchema = {
    name: String,
    songs: [String],
    albums: [String],
    listeners: Number
};

module.exports = artistSchema;