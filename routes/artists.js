/* ***********************************************
 * Artist Schema and other fun stuff
 * *********************************************** */
/**
 * @swagger
 * components:
 *   schemas:
 *     Artist:
 *       type: object
 *       required:
 *         - name
 *         - songs
 *         - album
 *         - listeners
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique MongoDB ObjectId for the artist
 *           example: "661f1a2b3c4d5e6f7a8b9c10"
 *         name:
 *           type: string
 *           description: Name of the artist or band
 *           example: Queen
 *         songs:
 *           type: array
 *           description: Array of song ObjectIds associated with the artist
 *           items:
 *             type: string
 *             example: "661f1a2b3c4d5e6f7a8b9c01"
 *         album:
 *           type: array
 *           description: Array of album ObjectIds associated with the artist
 *           items:
 *             type: string
 *             example: "661f1a2b3c4d5e6f7a8b9c20"
 *         listeners:
 *           type: integer
 *           description: Number of monthly listeners
 *           example: 52000000
 */
/**
 * @swagger
 * tags:
 *   name: Artists
 *   description: The Artist managing API
 */

/* ***********************************************
 * Artist Routes
 * *********************************************** */
const express = require('express');
const router = express.Router();
const { validate, rules } = require('../middleware/validator');
const {isAuthenticated} = require('../middleware/authenicate')
const artistsController = require('../controllers/artists');

/**
 * @swagger
 * /artist:
 *   get:
 *     summary: Get all artists
 *     tags: [Artists]
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
 *     tags: [Artists]
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

/**
 * @swagger
 * /artist:
 *   post:
 *     summary: Create a new Artist
 *     tags: [Artists]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Artist'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Artist not created
 */
router.post('/',
    isAuthenticated,
    rules.artistPOST_VRS(),
    validate,
    artistsController.createArtist);

/**
 * @swagger
 * /artist/{id}:
 *   put:
 *     summary: Update an Artist
 *     tags: [Artists]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Artist'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Artist not updated
 */
router.put('/:id',
    isAuthenticated,
    rules.artistPUT_VRS(),
    validate,
    artistsController.updateArtistById);

/**
 * @swagger
 * /artist/{id}:
 *   delete:
 *     summary: Delete an artist
 *     tags: [Artists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *          description: Artist was deleted
 *       500:
 *          description: An error occurred while attempting to delete the artist
 */
router.delete('/:id',isAuthenticated, artistsController.deleteArtistById);

module.exports = router;
