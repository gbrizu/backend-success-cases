const request = require('supertest');
const express = require('express');
const contactController = require('../contactController');
const ContactService = require('../../services/contactService');

const app = express();
app.use(express.json());
app.get('/contacts', contactController.findAllContacts);

jest.mock('../../services/contactService');

describe('Contact Controller', () => {
  describe('findAllContacts', () => {
    it('should return 200 and a list of contacts', async () => {
      ContactService.getAllContacts.mockResolvedValue([{ id: 1, name: 'John Doe' }]);

      const res = await request(app).get('/contacts');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
    });


    it('should return 500 if there is an error', async () => {
      ContactService.getAllContacts.mockRejectedValue(new Error('Error'));

      const res = await request(app).get('/contacts');

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: 'Error al obtener los contactos', error: 'Error' });
    });
  });
});