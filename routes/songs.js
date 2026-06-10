/* ***********************************************
 * Song Schema
 * *********************************************** */
/**
 * @swagger
 * components:
 *   schemas:
 *     Song:
 *       type: object
 *       required:
 *         - name
 *         - len_in_sec
 *         - len_in_min
 *         - artist_id
 *         - album_id
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique MongoDB ObjectId for the song
 *           example: "661f1a2b3c4d5e6f7a8b9c01"
 *         
 *         name:
 *           type: string
 *           description: Name of the song
 *           example: "Bohemian Rhapsody"
 *         
 *         len_in_sec:
 *           type: integer
 *           description: Song length in seconds
 *           example: 354
 *         
 *         len_in_min:
 *           type: integer
 *           description: Song length in minutes
 *           example: 6
 *         
 *         artist_id:
 *           type: string
 *           description: MongoDB ObjectId reference to the artist
 *           example: "661f1a2b3c4d5e6f7a8b9c10"
 *         
 *         album_id:
 *           type: string
 *           description: MongoDB ObjectId reference to the album
 *           example: "661f1a2b3c4d5e6f7a8b9c20"
 *         
 *         playlists_in:
 *           type: array
 *           description: Array of playlist ObjectIds containing this song
 *           items:
 *             type: string
 *             example: "661f1a2b3c4d5e6f7a8b9c30"
 */
/**
 * @swagger
 * tags:
 *      name: Songs
 *      description: The Song managing API
 */

/* ***********************************************
 * Song Routes
 * *********************************************** */
const express = require('express');
const router = express.Router();
const { validate, rules } = require('../middleware/validator');
const {isAuthenticated} = require('../middleware/authenicate')

const songsController = require('../controllers/songs');

/**
 * @swagger
 * /song:
 *   get:
 *     summary: Get all songs
 *     tags: [Songs]
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
 *     tags: [Songs]
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

/**
 * @swagger
 * /song:
 *   post:
 *     summary: Create a new Song
 *     tags: [Songs]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Song'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Song not created
 */
router.post('/',
    isAuthenticated,
    rules.songPOSTValidationRules(),
    validate,
    songsController.createSong);

/**
 * @swagger
 * /song/{id}:
 *   put:
 *     summary: Update a song
 *     tags: [Songs]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Song'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Song not updated
 */
router.put('/:id',
    isAuthenticated,
    rules.songPUTValidationRules(),
    validate,
    songsController.updateSongById);

/**
 * @swagger
 * /song/{id}:
 *   delete:
 *     summary: Delete a song
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *          description: Song was deleted
 *       500:
 *          description: An error occurred while attempting to delete the song
 */
router.delete('/:id', isAuthenticated, songsController.deleteSongById);

module.exports = router;