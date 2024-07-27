const offeringService = require('../offeringService');
const OfferingModel = require('../../models/offeringModel');
describe('offeringService', () => {
    // Verifica que getAll devuelva todos los offerings.
    describe('getAll', () => {
        it('should return all offerings', async () => {
            // Arrange
            const mockOfferings = [
                { id: 1, name: 'Offering 1', description: 'Description 1' },
                { id: 2, name: 'Offering 2', description: 'Description 2' }
            ];
            jest.spyOn(OfferingModel, 'findAll').mockResolvedValue(mockOfferings);
            // Act
            const result = await offeringService.getAll();
            // Assert
            expect(result).toEqual(mockOfferings);
        });
        // Verifica que getAll devuelva un array vacío si no hay offerings.
        it('should return an empty array if no offerings are found', async () => {
            // Arrange
            jest.spyOn(OfferingModel, 'findAll').mockResolvedValue([]);
            // Act
            const result = await offeringService.getAll();
            // Assert
            expect(result).toEqual([]);
        });
        // Verifica que getAll lance un error si hay un problema al recuperar los offerings.
        it('should throw an error if there is a problem retrieving offerings', async () => {
            // Arrange
            jest.spyOn(OfferingModel, 'findAll').mockRejectedValue(new Error('Database error'));
            // Act & Assert
            await expect(offeringService.getAll()).rejects.toThrow('Error al obtener todas las offering desde la base de datos.');
        });
    });
});