const express = require('express');
const router = express.Router();
const playlistControl = require('../controllers/playlist');

router.get('/', playlistControl.getAllPlaylists);

module.exports = router;