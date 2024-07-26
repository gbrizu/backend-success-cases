const industryService = require('../industryService');
//const IndustryModel = require('../models/industryModel');
describe('industryService', () => {
    // Verifica que getAll devuelva todas las industrias.
    describe('getAll', () => {
        it('should return all industries', async () => {
        // Arrange
        const mockIndustries = [
            { id: 1, name: 'Technology' },
            { id: 2, name: 'Healthcare' }
        ];
        jest.spyOn(industryService, 'getAll').mockResolvedValue(mockIndustries);
        // Act
        const result = await industryService.getAll();
        // Assert
        expect(result).toEqual(mockIndustries);
        });
        // Verifica que getAll devuelva un array vacío si no hay industrias.
        it('should return an empty array if no industries are found', async () => {
        // Arrange
        jest.spyOn(industryService, 'getAll').mockResolvedValue([]);
        // Act
        const result = await industryService.getAll();
        // Assert
        expect(result).toEqual([]);
        });
        // Verifica que getAll lance un error si hay un problema al recuperar las industrias.
        it('should throw an error if there is a problem retrieving industries', async () => {
        // Arrange
        jest.spyOn(industryService, 'getAll').mockRejectedValue(new Error('Database error'));
        // Act & Assert
        await expect(industryService.getAll()).rejects.toThrow('Database error');
        });
    });
});