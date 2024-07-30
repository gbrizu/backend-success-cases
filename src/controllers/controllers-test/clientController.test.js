const request = require('supertest');
const express = require('express');
const clientController = require('../clientController');
const ClientService = require('../../services/clientService');

const app = express();
app.use(express.json());
app.get('/clients', clientController.getAllClients);
app.get('/clients/:clientId', clientController.getByIdClient);
app.post('/clients', clientController.createClient);

jest.mock('../../services/clientService');

describe('Client Controller', () => {
  describe('getAllClients', () => {
    it('should return 200 and a list of clients', async () => {
      ClientService.getAllClients.mockResolvedValue([{ id: 1, name: 'John' }]);

      const res = await request(app).get('/clients');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: 'John' }]);
    });


    it('should return 404 if there is an error', async () => {
      ClientService.getAllClients.mockRejectedValue(new Error('Error'));

      const res = await request(app).get('/clients');

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: 'Error al obtener los Clientes', error: 'Error' });
    });
  });

  describe('getByIdClient', () => {
    it('should return 200 and the client', async () => {
      ClientService.getByIdClient.mockResolvedValue({ id: 1, name: 'John' });

      const res = await request(app).get('/clients/1');

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: 1, name: 'John' });
    });
    
    it('should return 404 if there is an error', async () => {
      ClientService.getByIdClient.mockRejectedValue(new Error('Error'));

      const res = await request(app).get('/clients/1');

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: 'Error al obtener el Cliente', error: 'Error' });
    });
  });

  describe('createClient', () => {
    it('should return 201 and the created client', async () => {
      const newClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
      ClientService.createClient.mockResolvedValue(newClient);

      const res = await request(app)
        .post('/clients')
        .send({ name: 'John', surname: 'Doe', email: 'john.doe@example.com' });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(newClient);
    });


    it('should return 400 if there is an error', async () => {
      ClientService.createClient.mockRejectedValue(new Error('Error'));

      const res = await request(app)
        .post('/clients')
        .send({ name: 'John', surname: 'Doe', email: 'john.doe@example.com' });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'Error al crear el cliente', error: 'Error' });
    });
  });
});