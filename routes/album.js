const express = require('express');
const router = express.Router();

const albumController = require('../controllers/album');


router.get('/', albumController.getAllAlbums);
router.get('/:id', albumController.getAlbumById);

module.exports = router;