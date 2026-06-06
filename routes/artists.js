/* ***********************************************
 * Artist Routes
 * *********************************************** */
const express = require('express');
const router = express.Router();

const artistsController = require('../controllers/artists');

/**
 * @swagger
 * /artist:
 *   get:
 *     summary: Get all artists
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', artistsController.getAllArtists);

/**
 * @swagger
 * /artist/{id}:
 *   get:
 *     summary: Get artist by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Artist not found
 */
router.get('/:id', artistsController.getArtistById);

router.put('/:id', artistsController.updateArtistById);

module.exports = router;