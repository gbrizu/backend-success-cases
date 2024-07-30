const request = require('supertest');
const express = require('express');
const projectTypeController = require('../projectTypeController');
const projectTypeService = require('../../services/projectTypeService');

const app = express();
app.use(express.json());
app.get('/project-types', projectTypeController.getAllProjectType);

jest.mock('../../services/projectTypeService');

describe('ProjectType Controller', () => {
  describe('getAllProjectType', () => {
    it('should return 200 and a list of project types', async () => {
      projectTypeService.getAllProjectType.mockResolvedValue([{ id: 1, name: 'Type 1' }]);

      const res = await request(app).get('/project-types');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: 'Type 1' }]);
    });

    it('should return 500 if there is an error', async () => {
      projectTypeService.getAllProjectType.mockRejectedValue(new Error('Error'));

      const res = await request(app).get('/project-types');

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ message: 'Error al obtener el tipo de proyecto', error: 'Error' });
    });
  });
});