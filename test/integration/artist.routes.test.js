// const request = require('supertest');
// const server = require('../../server');
// const artistService = require('../../src/services/artist/artist.service');

// // Mock do service para isolar a lógica da rota
// jest.mock('../../src/services/artist/artist.service');

// describe('Rotas de Artistas (integração)', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('POST /api/artists', () => {
//     it('deve criar um novo artista e retornar 200', async () => {
//       const newArtist = { name: 'Anitta' };
//       const mockResponse = { id: 1, name: 'Anitta' };

//       artistService.insert.mockResolvedValue(mockResponse);

//       const res = await request(server)
//         .post('/api/artist')
//         .send(newArtist)
//         .expect(200);

//       expect(res.body).toEqual(mockResponse);
//       expect(artistService.insert).toHaveBeenCalledWith(newArtist);
//     });
//   });

//   describe('GET /api/artists', () => {
//     it('deve retornar lista de artistas', async () => {
//       const mockList = [{ id: 1, name: 'Anitta' }, { id: 2, name: 'Luísa Sonza' }];
//       artistService.findArtists.mockResolvedValue(mockList);

//       const res = await request(server)
//         .get('/api/artist')
//         .expect(200);

//       expect(res.body).toEqual(mockList);
//       expect(artistService.findArtists).toHaveBeenCalled();
//     });
//   });

//   describe('PATCH /api/artist/:id', () => {
//     it('deve atualizar um artista', async () => {
//       const updated = { id: 1, name: 'Anitta Remix' };
//       artistService.update = jest.fn().mockResolvedValue(updated);

//       const res = await request(server)
//         .patch('/api/artists/1')
//         .send({ name: 'Anitta Remix' })
//         .expect(200);

//       expect(res.body).toEqual(updated);
//       expect(artistService.update).toHaveBeenCalledWith('1', { name: 'Anitta Remix' });
//     });
//   });
// });
