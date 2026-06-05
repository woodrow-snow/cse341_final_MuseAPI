/* ***********************************************
 * Sample Song Data
 * *********************************************** */
const songs = [
    {
        id: '1',
        name: 'Shape of You',
        len_in_sec: 240,
        len_in_min: 4,
        artist_id: '101',
        album_id: '201',
        playlists_in: ['301']
    }
];

/* ***********************************************
 * Get All Songs
 * *********************************************** */
const getAllSongs = async (req, res) => {
    try {
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get songs',
            error: error.message
        });
    }
};

/* ***********************************************
 * Get Song By Id
 * *********************************************** */
const getSongById = async (req, res) => {
    try {
        const song = songs.find(song => song.id === req.params.id);

        if (!song) {
            return res.status(404).json({
                message: 'Song not found'
            });
        }

        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get song',
            error: error.message
        });
    }
};

/* ***********************************************
 * Export Controller Functions
 * *********************************************** */
module.exports = {
    getAllSongs,
    getSongById
};