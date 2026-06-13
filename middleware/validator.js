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

// after looking over album and playlist, I (Woodorw) noticed that they are identical. Going to use these rules for both.
rules.albumPOST_VRS = () => {
    return [
        body('_id')
            .optional()
            .notEmpty()
            .withMessage('if providing _id, it must not be empty')
            .isMongoId()
            .withMessage('_id must be a mongo id'),
        
        body('name')
            .trim()
            .notEmpty()
            .withMessage('name must not be empty')
            .isString()
            .withMessage('name must be a string'),
        
        body('songs')
            .optional()
            .notEmpty()
            .withMessage('If providing songs, please include at least 1 entry')
            .isArray()
            .withMessage('songs must be an array'),
        body('songs.*')
            .optional()
            .notEmpty()
            .withMessage('Songs array must not be empty')
            .isMongoId()
            .withMessage('songs id must be MongoID'),
        
        body('songs_total')
            .optional()
            .notEmpty()
            .withMessage('songs_total must not be empty')
            .isInt()
            .withMessage('songs_total must be an int'),
        
        body('total_listen_time_in_sec')
            .optional()
            .notEmpty()
            .withMessage('total_listen_time_in_sec must not be empty')
            .isInt()
            .withMessage('total_listen_time_in_sec must be an int'),
    ]
}

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
            .notEmpty()
            .withMessage('If providing songs, please include at least 1 entry')
            .isArray()
            .withMessage('songs must be an array'),
        body('songs.*')
            .optional()
            .notEmpty()
            .withMessage('Songs array must not be empty')
            .isMongoId()
            .withMessage('songs id must be MongoID'),
        
        body('songs_total')
            .optional()
            .notEmpty()
            .withMessage('songs_total must not be empty')
            .isInt()
            .withMessage('songs_total must be an int'),
        
        body('total_listen_time_in_sec')
            .optional()
            .notEmpty()
            .withMessage('total_listen_time_in_sec must not be empty')
            .isInt()
            .withMessage('total_listen_time_in_sec must be an int'),
    ]
}


// will complete validation rules one 3rd and 4th collections are finished

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