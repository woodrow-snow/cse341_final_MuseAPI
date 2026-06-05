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
    res.status(200).json(artists);
};

/* ***********************************************
 * Get Artist By Id
 * *********************************************** */
const getArtistById = async (req, res) => {
    const artist = artists.find(
        artist => artist.id === req.params.id
    );

    if (!artist) {
        return res.status(404).json({
            message: 'Artist not found'
        });
    }

    res.status(200).json(artist);
};

/* ***********************************************
 * Export Controller Functions
 * *********************************************** */
module.exports = {
    getAllArtists,
    getArtistById
};