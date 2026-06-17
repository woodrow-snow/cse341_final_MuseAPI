const { songModel } = require('../model/song');

jest.mock('../model/song', () => ({
    songModel: {
        getAllSongs: jest.fn(),
        getSongById: jest.fn()
    }
}));

describe('Song Model Tests', () => {
    test('getAllSongs exsists', async () => {
        songModel.getAllSongs.mockResolvedValue([]);

        const result = await songModel.getAllSongs();

        expect(result).toEqual([]);
    });

    test('getSongById exists', async () => {
        const fakeSong = {
            _id: '123',
            name: "Song Name"
        };

        songModel.getSongById.mockResolvedValue(fakeSong);

        const result = await songModel.getSongById('123');

        expect(result.name).toBe('Song Name');
    })
})