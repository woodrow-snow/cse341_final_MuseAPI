const { ObjectId } = require('mongodb');
const { playlistModel } = require('../model/playlist');


/* ***********************************************
 * Get All Playlists
 * *********************************************** */
const getAllPlaylists = async (req, res) => {
    try{
        const data = await playlistModel.getAllPlaylists()
        res.status(200).send(data);
    }

    catch(error){
        res.status(500).json({
            message: 'Failed to get playlists',
            error: error.message
        });
    }}

const getPlaylistById = async (req, res) => {
    try{
        const id = new ObjectId(req.params.id);
        const playlist = await playlistModel.getPlaylistById(id);  
        if(!playlist){
            res.status(404).json({
                message: 'Playlist not found'
            });
        }
        res.status(200).json(playlist);     
    }catch(error){
         res.status(500).json({
            message: 'Failed to get playlists',
            error: error.message
        });
    }}

const createPlaylist = async (req, res) => {
    try {
        const newPlaylist = await playlistModel.createPlaylist(req.body);

        res.status(201).json({
            content: newPlaylist,
            message: "Playlist created successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create playlist",
            error: error.message
        });
    }
};

/* ***********************************************
 * Update Playlist by ID
 * *********************************************** */
const updatePlaylistById = async (req, res) => {
    const id = new ObjectId(req.params.id);
    // getting id from params and updated playlist information from body
    try {
        const updatedPlaylist = {
            "name": req.body.name,
            "songs": req.body.songs,
            "songs_total": req.body.songs_total,
            "total_listen_time_in_sec": req.body.total_listen_time_in_sec
        }

        const results = await playlistModel.updatePlaylistById(id, updatedPlaylist);
        res.status(200).send(results); 

    } catch (err) {
        res.status(500).json({
            message: 'An error has occurred while attempting to update the playlist.',
            error: err.message
        });
    }
}

/* ***********************************************
 * Delete Playlist by ID
 * *********************************************** */
const deletePlaylistById = async (req, res) => {
    try {
        // getting id from params
        const id = new ObjectId(req.params.id);

        // passing to model to delete playlist
        const results = await playlistModel.deletePlaylistById(id);

        if (results.deletedCount > 0) {
            res.status(200).json({ message: 'Playlist deleted successfully.' });
        } else {
            res.status(404).json({ message: 'Playlist not found.' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'An error has occurred while attempting to delete the playlist.',
            error: err.message
        });
    }
};

module.exports = { 
    getAllPlaylists, 
    getPlaylistById,
    createPlaylist,
    updatePlaylistById,
    deletePlaylistById
};