const artistRepository = require('../../src/repositories/artist/artist.repository');
const artistService = require('../../src/services/artist/artist.service');

// Mock do repository
jest.mock('../../src/repositories/artist/artist.repository');

describe('Artist Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve inserir um artista chamando o repository corretamente', async () => {
    const mockArtist = { name: 'Anitta' };
    artistRepository.create.mockResolvedValue(mockArtist);

    const result = await artistService.insert(mockArtist);

    expect(artistRepository.create).toHaveBeenCalledWith(mockArtist);
    expect(result).toEqual(mockArtist);
  });

  it('deve retornar lista de artistas', async () => {
    const mockList = [{ name: 'Anitta' }, { name: 'Luísa Sonza' }];
    artistRepository.findArtists.mockResolvedValue(mockList);

    const result = await artistService.findArtists();

    expect(artistRepository.findArtists).toHaveBeenCalled();
    expect(result).toEqual(mockList);
  });
});