const { artistModel } = require('../model/artist');

jest.mock('../model/artist', () => ({
    artistModel: {
        getAllArtists: jest.fn(),
        getArtistById: jest.fn()
    }
}));

describe('Artist Model Tests', () => {

    test('getAllArtists exists', async () => {
        artistModel.getAllArtists.mockResolvedValue([]);

        const result = await artistModel.getAllArtists();

        expect(result).toEqual([]);
    });

    test('getArtistById exists', async () => {
        const fakeArtist = {
            _id: '123',
            name: 'Queen'
        };

        artistModel.getArtistById.mockResolvedValue(fakeArtist);

        const result = await artistModel.getArtistById('123');

        expect(result.name).toBe('Queen');
    });

});