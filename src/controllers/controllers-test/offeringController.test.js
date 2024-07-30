const request = require('supertest');
const express = require('express');
const offeringController = require('../offeringController');
const OfferingService = require('../../services/offeringService');

const app = express();
app.use(express.json());
app.get('/offerings', offeringController.getAll);

jest.mock('../../services/offeringService');

describe('Offering Controller', () => {
  describe('getAll', () => {
    it('should return 200 and a list of offerings', async () => {
      OfferingService.getAll.mockResolvedValue([{ id: 1, name: 'Offering 1' }]);

      const res = await request(app).get('/offerings');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: 'Offering 1' }]);
    });



    it('should return 500 if there is an error', async () => {
      OfferingService.getAll.mockRejectedValue(new Error('Error'));

      const res = await request(app).get('/offerings');

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: 'Error al obtener los offerings', error: 'Error' });
    });
  });
});