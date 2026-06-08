const { ObjectId } = require('mongodb');
const { songModel } = require('../model/song');

/* ***********************************************
 * Sample Song Data
 * *********************************************** */
// const songs = [
//     {
//         id: '1',
//         name: 'Shape of You',
//         len_in_sec: 240,
//         len_in_min: 4,
//         artist_id: '101',
//         album_id: '201',
//         playlists_in: ['301']
//     }
// ];

/* ***********************************************
 * Get All Songs
 * *********************************************** */
const getAllSongs = async (req, res) => {
    try {
        const data = await songModel.getAllSongs()
        res.status(200).send(data);
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
    const id = new ObjectId(req.params.id);
    try {
        const song = await songModel.getSongById(id);

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
 * Post Song
 * *********************************************** */
const createSong = async (req, res) => {
    try {
        const newSong = await songModel.createSong(req.body);
        res.status(201).json({
            content: newSong,
            message: "This data created successfully."
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error occurred while attempting to create the song',
            error: err.message
        });
    }
}

const updateSongById = async (req, res) => {
    // getting id from params
    const id = new ObjectId(req.params.id);

    // attempting to update object in DB
    try {
        // creating object with updated information
        const updatedSong = {
            name: req.body.name,
            len_in_sec: req.body.len_in_sec,
            len_in_min: req.body.len_in_min,
            artist_id: req.body.artist_id,
            album_id: req.body.album_id,
            playlists_in: req.body.playlists_in
        };

        // passing to model to update in db
        const results = await songModel.updateSongById(id, updatedSong);
        res.status(200).send(results);

    } catch (err) {
        res.status(500).json({
            message: 'An error occurring while attempting to update the song',
            error: err.message
        })
    }
}

/* ***********************************************
* Delete Song 
* *********************************************** */
const deleteSongById = async (req, res) => {
    try {
        // getting id from params
        const id = new ObjectId(req.params.id);

        // passing to model to delete in db
        const results = await songModel.deleteSongById(id);

        if (results.deletedCount > 0) {
            res.status(200).json({ message: 'Song deleted successfully.' });
        } else {
            res.status(404).json({ message: 'Song not found.' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'An error occurred while attempting to delete the song',
            error: err.message
        });
    }
};

/* ***********************************************
 * Export Controller Functions
 * *********************************************** */
module.exports = {
    getAllSongs,
    getSongById,
    createSong,
    updateSongById,
    deleteSongById,
};