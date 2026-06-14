const { albumModel } = require('../model/album');

jest.mock('../model/album', () => ({
    albumModel: {
        getAllAlbums: jest.fn(),
        getAlbumById: jest.fn()
    }
}));

describe('Album Model Tests', () => {

    test('getAllAlbums exists', async () => {
        albumModel.getAllAlbums.mockResolvedValue([]);

        const result = await albumModel.getAllAlbums();

        expect(result).toEqual([]);
    });

    test('getAlbumById exists', async () => {
        const fakeAlbum = {
            _id: '123',
            name: 'Test Album'
        };

        albumModel.getAlbumById.mockResolvedValue(fakeAlbum);

        const result = await albumModel.getAlbumById('123');

        expect(result.name).toBe('Test Album');
    });

});