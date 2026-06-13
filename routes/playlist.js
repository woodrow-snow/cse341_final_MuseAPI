const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlist');


router.get('/', playlistController.getAllPlaylists);
router.get('/:id', playlistController.getPlaylistById);

module.exports = router;