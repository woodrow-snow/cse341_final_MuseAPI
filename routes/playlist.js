const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlist');
const { validate, rules } = require('../middleware/validator');
const { isAuthenticated } = require('../middleware/authenicate');

router.get('/', playlistController.getAllPlaylists);

router.get('/:id', playlistController.getPlaylistById);

router.post(
    '/',
    isAuthenticated,
    rules.playlistPOST_VRS(),
    validate,
    playlistController.createPlaylist
);

module.exports = router;