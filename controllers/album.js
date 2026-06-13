const albumModel = require('../model/album');

async function getAllAlbums(req, res) {
    try {
        // testing
        console.log('In controller...');
        const data = await albumModel.getAllAlbums();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get albums',
            error: error.message
        });
    }
}

module.exports = {
    getAllAlbums,
}