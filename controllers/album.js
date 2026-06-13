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

module.exports = { getAllAlbums, getAlbumById, createAlbum };
