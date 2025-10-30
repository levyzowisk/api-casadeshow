const eventController = require('../../../src/controllers/event/event.controller');
const eventService = require('../../../src/services/event/event.service');

jest.mock('../../../src/services/event/event.service');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Event Controller', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = mockResponse();
    next = jest.fn();
    jest.clearAllMocks();
  });

  test('find deve retornar lista de eventos e status 200', async () => {
    const mockEvents = [{ id: 1, name: 'Festival do Pici' }];
    eventService.find.mockResolvedValue(mockEvents);

    req.query = { take: 5, skip: 0 };

    await eventController.find(req, res, next);

    expect(eventService.find).toHaveBeenCalledWith(5, 0);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEvents);
  });

  test('findById deve retornar um evento e status 200', async () => {
    const mockEvent = { id: 10, name: 'Rock in Pici' };
    eventService.findById.mockResolvedValue(mockEvent);

    req.params = { id: 10 };

    await eventController.findById(req, res, next);

    expect(eventService.findById).toHaveBeenCalledWith(10);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEvent);
  });

  test('create deve criar evento e retornar status 200', async () => {
    const newEvent = { name: 'Show da Iasmin', date: '2025-12-25' };
    const createdEvent = { id: 1, ...newEvent };

    eventService.create.mockResolvedValue(createdEvent);
    req.body = newEvent;

    await eventController.create(req, res, next);

    expect(eventService.create).toHaveBeenCalledWith(newEvent);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(createdEvent);
  });

  test('update deve atualizar evento e retornar status 200', async () => {
    const updatedEvent = { id: 1, name: 'Show da Iasmin Reloaded' };

    eventService.update.mockResolvedValue(updatedEvent);
    req.params = { id: 1 };
    req.body = { name: 'Show da Iasmin Reloaded' };

    await eventController.update(req, res, next);

    expect(eventService.update).toHaveBeenCalledWith(1, { name: 'Show da Iasmin Reloaded' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedEvent);
  });

 
  test('remove deve remover evento e retornar status 204', async () => {
    eventService.remove.mockResolvedValue();

    req.params = { id: 1 };

    await eventController.remove(req, res, next);

    expect(eventService.remove).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalled();
  });
});
