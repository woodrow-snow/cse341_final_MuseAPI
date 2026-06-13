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

module.exports = { 
    getAllPlaylists, 
    getPlaylistById,
    createPlaylist
};