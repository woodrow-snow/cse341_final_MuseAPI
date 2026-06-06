/* ***********************************************
 * Sample Artist Data
 * *********************************************** */
const artists = [
    {
        id: '101',
        name: 'Ed Sheeran',
        songs: ['1'],
        albums: ['201'],
        listeners: 1000000
    }
];

// require statements
const { artistModel } = require('../model/artist');
const { ObjectId } = require('mongodb');

/* ***********************************************
 * Get All Artists
 * *********************************************** */
const getAllArtists = async (req, res) => {
    try {
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get artists',
            error: error.message
        });
    }
};

/* ***********************************************
 * Get Artist By Id
 * *********************************************** */
const getArtistById = async (req, res) => {
    try {
        const artist = artists.find(
            artist => artist.id === req.params.id
        );

        if (!artist) {
            return res.status(404).json({
                message: 'Artist not found'
            });
        }

        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get artist',
            error: error.message
        });
    }
};

const updateArtistById = async (req, res) => {
    // getting id from params
    const id = new ObjectId(req.params.id);
    
    try {
        // creating new object based off of req info
        const updatedArtist = {
            "name": req.body.name,
            "songs": req.body.songs,
            "album": req.body.album,
            "listeners":req.body.listeners
        }

        // passing to model to update artist
        const results = await artistModel.updateArtistById(id, updatedArtist);
        res.status(200).send(results); 

    } catch (err) {
        res.status(500).json({
            message: 'An error has occurred while attempting to update the artist.',
            error: err.message
        });
    }
}

/* ***********************************************
 * Export Controller Functions
 * *********************************************** */
module.exports = {
    getAllArtists,
    getArtistById,
    updateArtistById
};