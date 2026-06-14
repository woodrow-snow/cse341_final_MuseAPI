/* ***********************************************
 * Artist Schema and other fun stuff
 * *********************************************** */
/**
 * @swagger
 * components:
 *   schemas:
 *     Album:
 *       type: object
 *       required:
 *         - name
 *         - songs
 *         - songs_total
 *         - total_listen_time_in_sec
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique MongoDB ObjectId for the album
 *           example: "85b2c3d4e5f6a7b8c9d0e1f2"
 *
 *         name:
 *           type: string
 *           description: Name of the album
 *           example: "Thriller"
 *
 *         songs:
 *           type: array
 *           description: Array of song ObjectIds included in the album
 *           items:
 *             type: string
 *             example: "85b2c3d4e5f6a7b8c9d0e1a1"
 *
 *         songs_total:
 *           type: integer
 *           description: Total number of songs in the album
 *           example: 9
 *
 *         total_listen_time_in_sec:
 *           type: integer
 *           description: Total duration of all songs in the album in seconds
 *           example: 32940
 */
/**
 * @swagger
 * tags:
 *   name: Album
 *   description: The Album managing API
 */
const express = require('express');
const router = express.Router();

const albumController = require('../controllers/album');
const { validate, rules } = require('../middleware/validator');
const { isAuthenticated } = require('../middleware/authenicate');

/**
 * @swagger
 * /album:
 *   get:
 *     summary: Get all albums
 *     tags: [Album]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', albumController.getAllAlbums);

/**
 * @swagger
 * /album/{id}:
 *   get:
 *     summary: Get album by id
 *     tags: [Album]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: album not found
 */
router.get('/:id', albumController.getAlbumById);

/**
 * @swagger
 * /album:
 *   post:
 *     summary: Create a new Album
 *     tags: [Album]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/album'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: album not created
 */
router.post(
    '/',
    isAuthenticated,
    rules.albumPOST_VRS(),
    validate,
    albumController.createAlbum
);

module.exports = router;