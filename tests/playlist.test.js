const { playlistModel } = require('../model/playlist');

jest.mock('../model/playlist', () => ({
    playlistModel: {
        getAllPlaylists: jest.fn(),
        getPlaylistById: jest.fn()
    }
}));

describe('Playlist Model Tests', () => {

    test('getAllPlaylists exists', async () => {
        playlistModel.getAllPlaylists.mockResolvedValue([]);

        const result = await playlistModel.getAllPlaylists();

        expect(result).toEqual([]);
    });

    test('getPlaylistById exists', async () => {
        const fakePlaylist = {
            _id: '123',
            name: 'Workout Playlist'
        };

        playlistModel.getPlaylistById.mockResolvedValue(fakePlaylist);

        const result = await playlistModel.getPlaylistById('123');

        expect(result.name).toBe('Workout Playlist');
    });

});