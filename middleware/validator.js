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
            .isNumeric()
            .withMessage('len_in_sec must be a number'),
        
        body('len_in_min')
            .optional()
            .isNumeric()
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
            .isNumeric()
            .withMessage('len_in_sec must be a number'),
        
        body('len_in_min')
            .optional()
            .isNumeric()
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