const { body, validationResult } = require('express-validator');
const rules = {};

/* ***********************************************
 * Song rules
 * *********************************************** */
rules.songPOSTValidationRules = () => {
    return [
        body('_id')
            .optional()
            .isObject()
            .withMessage('_id must be an json object')
            .notEmpty()
            .withMessage('_id must not be empty'),
        body('_id.$oid')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('_id oid must not be empty')
            .isMongoId()
            .withMessage('_id oid must be a MongoId'),
        
        body('name')
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),
        
        body('len_in_sec')
            .notEmpty()
            .withMessage('len_in_sec must not be empty')
            .isInt()
            .withMessage('len_in_sec must be a number'),
        
        body('len_in_min')
            .optional()
            .isInt()
            .withMessage('len_in_min must be a number'),
        
        body('artist_id')
            .notEmpty()
            .withMessage('artist_id must not be empty')
            .isObject()
            .withMessage('artist_id must be a json object'),
        body('artist_id.$oid')
            .trim()
            .notEmpty()
            .withMessage('artist_id oid must not be empty')
            .isMongoId()
            .withMessage('artist_id oid must be a MongoId'),
        
        body('album_id')
            .notEmpty()
            .withMessage('album_id must not be empty')
            .isObject()
            .withMessage('album_id must be a json object'),
        body('album_id.$oid')
            .trim()
            .notEmpty()
            .withMessage('album_id oid must not be empty')
            .isMongoId()
            .withMessage('album_id oid must be a MongoId'),
        
        body('playlist_in')
            .optional()
            .notEmpty()
            .withMessage('if including playing_in, ensure it is not empty')
            .isArray()
            .withMessage('playlist_in must be an array'),
        body('playlist_in.#.')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('playlist_in oid must not be empty')
            .isMongoId()
            .withMessage('playlist_in oid must be a Mongo Id'),
    ];
}

rules.songPUTValidationRules = () => {
    return [
        body('name')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),
        
        body('len_in_sec')
            .optional()
            .notEmpty()
            .withMessage('len_in_sec must not be empty')
            .isInt()
            .withMessage('len_in_sec must be a number'),
        
        body('len_in_min')
            .optional()
            .isInt()
            .withMessage('len_in_min must be a number'),
        
        body('artist_id')
            .optional()
            .notEmpty()
            .withMessage('artist_id must not be empty')
            .isObject()
            .withMessage('artist_id must be a json object'),
        body('artist_id.$oid')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('artist_id oid must not be empty')
            .isMongoId()
            .withMessage('artist_id oid must be a MongoId'),
        
        body('album_id')
            .optional()
            .notEmpty()
            .withMessage('album_id must not be empty')
            .isObject()
            .withMessage('album_id must be a json object'),
        body('album_id.$oid')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('album_id oid must not be empty')
            .isMongoId()
            .withMessage('album_id oid must be a MongoId'),
        
        body('playlist_in')
            .optional()
            .notEmpty()
            .withMessage('if including playing_in, ensure it is not empty')
            .isArray()
            .withMessage('playlist_in must be an array'),
        body('playlist_in.#.')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('playlist_in oid must not be empty')
            .isMongoId()
            .withMessage('playlist_in oid must be a Mongo Id'),
    ];
}

/* ***********************************************
 * Artist rules
 * *********************************************** */
rules.artistPOST_VRS = () => {
    return [
        body('_id')
            .optional()
            .isObject()
            .withMessage('_id must be an json object')
            .notEmpty()
            .withMessage('_id must not be empty'),
        body('_id.$oid')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('_id oid must not be empty')
            .isMongoId()
            .withMessage('_id oid must be a MongoId'),
        
        body('name')
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),
        
        body('songs')
            .optional()
            .notEmpty()
            .withMessage('if including songs, ensure it is not empty')
            .isArray()
            .withMessage('songs must be an array'),
        body('songs.#.')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('songs oid must not be empty')
            .isMongoId()
            .withMessage('songs oid must be a Mongo Id'),
        
        body('album')
            .notEmpty()
            .withMessage('album must not be empty')
            .isObject()
            .withMessage('album must be a json object'),
        body('album.$oid')
            .trim()
            .notEmpty()
            .withMessage('album oid must not be empty')
            .isMongoId()
            .withMessage('album oid must be a MongoId'),
        
        body('listeners')
            .notEmpty()
            .withMessage('listeners must not be empty')
            .isInt()
            .withMessage('listeners must be an int')
    ];
}

rules.artistPUT_VRS = () => {
    return [        
        body('name')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),
        
        body('songs')
            .optional()
            .notEmpty()
            .withMessage('if including songs, ensure it is not empty')
            .isArray()
            .withMessage('songs must be an array'),
        body('songs.#.')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('songs oid must not be empty')
            .isMongoId()
            .withMessage('songs oid must be a Mongo Id'),
        
        body('album')
            .optional()
            .notEmpty()
            .withMessage('album must not be empty')
            .isObject()
            .withMessage('album must be a json object'),
        body('album.$oid')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('album oid must not be empty')
            .isMongoId()
            .withMessage('album oid must be a MongoId'),
        
        body('listeners')
            .optional()
            .notEmpty()
            .withMessage('listeners must not be empty')
            .isInt()
            .withMessage('listeners must be an int')
    ];
}

/* ***********************************************
 * Playlist rules
 * *********************************************** */
rules.playlistPOST_VRS = () => {
    return [
        body('name')
            .notEmpty()
            .withMessage('name is required'),

        body('songs')
            .isArray()
            .withMessage('songs must be an array'),

        body('songs_total')
            .isInt()
            .withMessage('songs_total must be an integer'),

        body('total_listen_time_in_sec')
            .isInt()
            .withMessage('total_listen_time_in_sec must be an integer')
    ];
};

rules.playlistPUT_VRS = () => {
    return [
        body('name')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),

        body('songs')
            .optional()
            .isArray()
            .withMessage('songs must be an array'),

        body('songs_total')
            .optional()
            .isInt()
            .withMessage('songs_total must be an integer'),

        body('total_listen_time_in_sec')
            .optional()
            .isInt()
            .withMessage('total_listen_time_in_sec must be an integer')
    ];
};

/* ***********************************************
 * Album rules
 * *********************************************** */
rules.albumPOST_VRS = () => {
    return [
        body('name')
            .notEmpty()
            .withMessage('name is required'),

        body('songs')
            .isArray()
            .withMessage('songs must be an array'),

        body('songs_total')
            .isInt()
            .withMessage('songs_total must be an integer'),

        body('total_listen_time_in_sec')
            .isInt()
            .withMessage('total_listen_time_in_sec must be an integer')
    ];
};

rules.albumPUT_VRS = () => {
    return [
        body('name')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),

        body('songs')
            .optional()
            .isArray()
            .withMessage('songs must be an array'),

        body('songs_total')
            .optional()
            .isInt()
            .withMessage('songs_total must be an integer'),

        body('total_listen_time_in_sec')
            .optional()
            .isInt()
            .withMessage('total_listen_time_in_sec must be an integer')
    ];
};

/* ***********************************************
 * Validate Middleware
 * *********************************************** */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
}

module.exports = {
    validate,
    rules
}