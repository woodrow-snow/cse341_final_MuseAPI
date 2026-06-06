/* ***********************************************
 * Song Routes
 * *********************************************** */
const express = require('express');
const router = express.Router();

const songsController = require('../controllers/songs');

/**
 * @swagger
 * /song:
 *   get:
 *     summary: Get all songs
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', songsController.getAllSongs);

/**
 * @swagger
 * /song/{id}:
 *   get:
 *     summary: Get song by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Song not found
 */
router.get('/:id', songsController.getSongById);

router.put('/:id', songsController.updateSongById)

module.exports = router;