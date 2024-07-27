const successCaseService = require('../successCaseService');
describe('successCaseService', () => {
  describe('deleteById', () => {
    it('should delete the success case for a given ID', async () => {
      const mockId = 1;
      jest.spyOn(successCaseService, 'deleteById').mockResolvedValue(true);

      const result = await successCaseService.deleteById(mockId);

      expect(result).toBe(true);
    });

    it('should throw an error if the ID does not exist', async () => {
      const mockId = 999;
      jest.spyOn(successCaseService, 'deleteById').mockRejectedValue(new Error('Not Found'));

      await expect(successCaseService.deleteById(mockId)).rejects.toThrow('Not Found');
    });
  });

  describe('getById', () => {
    it('should return the success case for a given ID', async () => {
      const mockId = 1;
      const mockSuccessCase = { id: 1, name: 'Test Case' };
      jest.spyOn(successCaseService, 'getById').mockResolvedValue(mockSuccessCase);

      const result = await successCaseService.getById(mockId);

      expect(result).toEqual(mockSuccessCase);
    });

    it('should throw an error if the ID does not exist', async () => {
      const mockId = 999;
      jest.spyOn(successCaseService, 'getById').mockRejectedValue(new Error('Not Found'));

      await expect(successCaseService.getById(mockId)).rejects.toThrow('Not Found');
    });
  });

  describe('getByFilter', () => {
    it('should return success cases that match the filter', async () => {
      const mockFilter = { status: 'active' };
      const mockSuccessCases = [
        { id: 1, name: 'Test Case 1', status: 'active' },
        { id: 2, name: 'Test Case 2', status: 'active' },
      ];
      jest.spyOn(successCaseService, 'getByFilter').mockResolvedValue(mockSuccessCases);

      const result = await successCaseService.getByFilter(mockFilter);

      expect(result).toEqual(mockSuccessCases);
    });

    it('should return an empty array if no success cases match the filter', async () => {
      const mockFilter = { status: 'inactive' };
      jest.spyOn(successCaseService, 'getByFilter').mockResolvedValue([]);

      const result = await successCaseService.getByFilter(mockFilter);

      expect(result).toEqual([]);
    });

    it('should throw an error if the filter is invalid', async () => {
      const mockFilter = { invalidField: 'invalidValue' };
      jest.spyOn(successCaseService, 'getByFilter').mockRejectedValue(new Error('Invalid filter'));

      await expect(successCaseService.getByFilter(mockFilter)).rejects.toThrow('Invalid filter');
    });
  });

  describe('getAll', () => {
    it('should return all success cases', async () => {
      const mockSuccessCases = [
        { id: 1, name: 'Test Case 1' },
        { id: 2, name: 'Test Case 2' },
      ];
      jest.spyOn(successCaseService, 'getAll').mockResolvedValue(mockSuccessCases);

      const result = await successCaseService.getAll();

      expect(result).toEqual(mockSuccessCases);
    });

    it('should return an empty array if there are no success cases', async () => {
      jest.spyOn(successCaseService, 'getAll').mockResolvedValue([]);

      const result = await successCaseService.getAll();

      expect(result).toEqual([]);
    });

    it('should throw an error if there is a problem retrieving the success cases', async () => {
      jest.spyOn(successCaseService, 'getAll').mockRejectedValue(new Error('Error retrieving success cases'));

      await expect(successCaseService.getAll()).rejects.toThrow('Error retrieving success cases');
    });
  });
});