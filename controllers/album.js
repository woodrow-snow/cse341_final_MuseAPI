const { ObjectId } = require('mongodb');
const {albumModel} = require('../model/album');


/* ***********************************************
 * Get All Albums
 * *********************************************** */
const getAllAlbums = async (req, res) => {
    try {
        const albums = await albumModel.getAllAlbums();
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ 
            error: 'An error occurred while fetching albums',
            message: error.message
        });
    }
}

/* ***********************************************
 * Get Album by ID
 * *********************************************** */
const getAlbumById = async (req, res) => {
    try{
        const id = new ObjectId(req.params.id);
        const album = await albumModel.getAlbumById(id);
        if(!album){
            return res.status(404).json({ 
                error: 'Album not found' });
        }
        res.status(200).json(album);
    }
    catch(error){
        res.status(500).json({
            error: 'An error occurred while fetching the album',
            message: error.message
        });
    }
}

const createAlbum = async (req, res) => {
    try {
        const newAlbum = await albumModel.createAlbum(req.body);

        res.status(201).json({
            content: newAlbum,
            message: "Album created successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create album",
            error: error.message
        });
    }
};

/* ***********************************************
 * Update Album by ID
 * *********************************************** */
const updateAlbumById = async (req, res) => {
    const id = new ObjectId(req.params.id);
    
    try {
        const updatedAlbum = {
            "name": req.body.name,
            "songs": req.body.songs,
            "songs_total": req.body.songs_total,
            "total_listen_time_in_sec": req.body.total_listen_time_in_sec
        }

        const results = await albumModel.updateAlbumById(id, updatedAlbum);
        res.status(200).send(results); 

    } catch (err) {
        res.status(500).json({
            message: 'An error has occurred while attempting to update the album.',
            error: err.message
        });
    }
}

/* ***********************************************
 * Delete Album by ID
 * *********************************************** */
const deleteAlbumById = async (req, res) => {
    try {
        // getting id from params
        const id = new ObjectId(req.params.id);

        // passing to model to delete album
        const results = await albumModel.deleteAlbumById(id);

        if (results.deletedCount > 0) {
            res.status(200).json({ message: 'Album deleted successfully.' });
        } else {
            res.status(404).json({ message: 'Album not found.' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'An error has occurred while attempting to delete the album.',
            error: err.message
        });
    }
};

module.exports = { getAllAlbums, getAlbumById, createAlbum, updateAlbumById, deleteAlbumById };
