const express = require('express');
const router = express.Router();

const albumController = require('../controllers/album');
const { validate, rules } = require('../middleware/validator');
const { isAuthenticated } = require('../middleware/authenicate');

router.get('/', albumController.getAllAlbums);

router.get('/:id', albumController.getAlbumById);

router.post(
    '/',
    isAuthenticated,
    rules.albumPOST_VRS(),
    validate,
    albumController.createAlbum
);

module.exports = router;