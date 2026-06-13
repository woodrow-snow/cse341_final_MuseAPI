const controller = {};
const playlistModel = require('../model/playlist');

controller.getAllPlaylists = async (req, res) => {
    try {
        const data = await playlistModel.getAllPlaylists();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get playlists',
            error: error.message
        });
    }
}

module.exports = controller;