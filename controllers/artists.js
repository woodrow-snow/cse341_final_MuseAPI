/* ***********************************************
 * Sample Artist Data
 * *********************************************** */
const artists = [
    {
        id: '101',
        name: 'Ed Sheeran',
        songs: ['1'],
        albums: ['201'],
        listeners: 1000000
    }
];

/* ***********************************************
 * Get All Artists
 * *********************************************** */
const getAllArtists = async (req, res) => {
    try {
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get artists',
            error: error.message
        });
    }
};

/* ***********************************************
 * Get Artist By Id
 * *********************************************** */
const getArtistById = async (req, res) => {
    try {
        const artist = artists.find(
            artist => artist.id === req.params.id
        );

        if (!artist) {
            return res.status(404).json({
                message: 'Artist not found'
            });
        }

        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get artist',
            error: error.message
        });
    }
};

/* ***********************************************
 * Export Controller Functions
 * *********************************************** */
module.exports = {
    getAllArtists,
    getArtistById
};