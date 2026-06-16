/* ***********************************************
 * Artist Schema and other fun stuff
 * *********************************************** */
/**
 * @swagger
 * components:
 *   schemas:
 *     Playlist:
 *       type: object
 *       required:
 *         - name
 *         - songs
 *         - songs_total
 *         - total_listen_time_in_sec
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique MongoDB ObjectId for the playlist
 *           example: "64f3a1b2c8d9e0f1a2b3c4d5"
 *
 *         name:
 *           type: string
 *           description: Name of the playlist
 *           example: "The Weeknd"
 *
 *         songs:
 *           type: array
 *           description: Array of song ObjectIds included in the playlist
 *           items:
 *             type: string
 *             example: "64f3a2c3d4e5f6a7b8c9d0e1"
 *
 *         songs_total:
 *           type: integer
 *           description: Total number of songs in the playlist
 *           example: 4
 *
 *         total_listen_time_in_sec:
 *           type: integer
 *           description: Total duration of all songs in the playlist in seconds
 *           example: 18420
 */
/**
 * @swagger
 * tags:
 *   name: Playlist
 *   description: The Playlist managing API
 */

const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlist');
const { validate, rules } = require('../middleware/validator');
const { isAuthenticated } = require('../middleware/authenicate');

/**
 * @swagger
 * /playlist:
 *   get:
 *     summary: Get all playlists
 *     tags: [Playlist]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', playlistController.getAllPlaylists);

/**
 * @swagger
 * /playlist/{id}:
 *   get:
 *     summary: Get playlist by id
 *     tags: [Playlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: playlist not found
 */
router.get('/:id', playlistController.getPlaylistById);

/**
 * @swagger
 * /playlist:
 *   post:
 *     summary: Create a new Playlist
 *     tags: [Playlist]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Playlist'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Playlist not created
 */
router.post(
    '/',
    isAuthenticated,
    rules.playlistPOST_VRS(),
    validate,
    playlistController.createPlaylist
);

/**
 * @swagger
 * /playlist/{id}:
 *   put:
 *     summary: Update a playlist
 *     tags: [Playlist]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Playlist'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Playlist not updated
 */
router.put('/:id',
    isAuthenticated,
    rules.playlistPUT_VRS(),
    validate,
    playlistController.updatePlaylistById);

/**
 * @swagger
 * /playlist/{id}:
 *   delete:
 *     summary: Delete a playlist
 *     tags: [Playlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *          description: Playlist was deleted
 *       500:
 *          description: An error occurred while attempting to delete the playlist
 */
router.delete('/:id', isAuthenticated, playlistController.deletePlaylistById);

module.exports = router;