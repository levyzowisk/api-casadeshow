const artistService = require('../../src/services/artist/artist.service');
const artistController = require('../../src/controllers/artist/artist.controller');

// Mock do service
jest.mock('../../src/services/artist/artist.service');

describe('Artist Controller', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: { name: 'Anitta' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve criar um artista e retornar status 200', async () => {
    const mockArtist = { id: 1, name: 'Anitta' };
    artistService.insert.mockResolvedValue(mockArtist);

    await artistController.createArtist(req, res, next);

    expect(artistService.insert).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockArtist);
  });

  it('deve listar artistas com status 200', async () => {
    const mockList = [{ name: 'Anitta' }];
    artistService.findArtists.mockResolvedValue(mockList);

    await artistController.findArtists(req, res, next);

    expect(artistService.findArtists).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockList);
  });
});