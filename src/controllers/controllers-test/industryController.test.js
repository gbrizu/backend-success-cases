const request = require('supertest');
const express = require('express');
const industryController = require('../industryController');
const IndustryService = require('../../services/industryService');

const app = express();
app.use(express.json());
app.get('/industries', industryController.getAll);

jest.mock('../../services/industryService');

describe('Industry Controller', () => {
  describe('getAll', () => {
    it('should return 200 and a list of industries', async () => {
      IndustryService.getAll.mockResolvedValue([{ id: 1, name: 'Tech' }]);

      const res = await request(app).get('/industries');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: 'Tech' }]);
    });



    it('should return 500 if there is an error', async () => {
      IndustryService.getAll.mockRejectedValue(new Error('Error'));

      const res = await request(app).get('/industries');

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: 'Error al obtener las industrias', error: 'Error' });
    });
  });
});