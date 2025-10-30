// test/integration/event.routes.test.js
const request = require('supertest');
const express = require('express');

// importa o router
const { router: eventRouter } = require('../../src/routes/event/event.route');

// mock do service
jest.mock('../../src/services/event/event.service');
const eventService = require('../../src/services/event/event.service');

// cria um app express fake
const app = express();
app.use(express.json());
app.use('/events', eventRouter);

describe('Event Routes (Supertest)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /events deve retornar lista de eventos', async () => {
    const mockEvents = [
      { id: '1', name: 'Show do Pici' },
      { id: '2', name: 'Festival UFC' },
    ];
    eventService.find.mockResolvedValue(mockEvents);

    const res = await request(app).get('/events?take=5&skip=0');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockEvents);
    expect(eventService.find).toHaveBeenCalledWith('5', '0');
  });

  test('GET /events/:id deve retornar evento pelo ID', async () => {
    const mockEvent = { id: '1', name: 'Evento Teste' };
    eventService.findById.mockResolvedValue(mockEvent);

    const res = await request(app).get('/events/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockEvent);
    expect(eventService.findById).toHaveBeenCalledWith('1');
  });

  test('POST /events deve criar novo evento', async () => {
    const newEvent = {
  name: "Show da Anitta",
  date_start: "2025-12-10T20:00:00.000Z",
  date_end: "2025-12-10T23:59:00.000Z",
  capacity: 5000,
  description: "Grande show de encerramento do ano!",
  status: "PUBLISHED",
  is_visible: true,
  sectors: [
    {
      name: "Pista",
      description: "Área comum próxima ao palco",
      price: 80,
      capacity: 3000,
      service_charge: 10
    },
    {
      name: "Camarote",
      description: "Área VIP com open bar",
      price: 200,
      capacity: 500,
      service_charge: 20
    }
  ],
  artistIds: ["artist-id-exemplo-1"]
};
    const createdEvent = { id: '123', name: 'Show Novo' };
    eventService.create.mockResolvedValue(createdEvent);

    const res = await request(app)
      .post('/events')
      .send(newEvent);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(createdEvent);
    expect(eventService.create).toHaveBeenCalledWith(newEvent);
  });

  test('PATCH /events/:id deve atualizar evento', async () => {
    const updated = { id: '123', name: 'Evento Atualizado' };
    eventService.update.mockResolvedValue(updated);

    const res = await request(app)
      .patch('/events/123')
      .send({ name: 'Evento Atualizado' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(updated);
    expect(eventService.update).toHaveBeenCalledWith('123', { name: 'Evento Atualizado' });
  });

  test('DELETE /events/:id deve remover evento', async () => {
    eventService.remove.mockResolvedValue();

    const res = await request(app).delete('/events/1');

    expect(res.statusCode).toBe(204);
    expect(eventService.remove).toHaveBeenCalledWith('1');
  });
});
