const clientService = require('../clientService');
const clientModel = require('../../models/clientModel.js');
describe('clientService', () => {
    // Verifica que getAllClient devuelva todos los clientes.
    describe('getByIdClient', () => {
        it('should return the client for a given ID', async () => {
            // Arrange
            const mockClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
            jest.spyOn(clientModel, 'findByPk').mockResolvedValue(mockClient);
            const result = await clientService.getByIdClient();
            expect(result).toEqual(mockClient);
        });
        // Verifica que getByIdClient lance un error si el ID no existe.
        it('should throw an error if the ID does not exist', async () => {
            // Arrange
            const mockId = 1000;
            jest.spyOn(clientModel, 'findByPk').mockResolvedValue(mockId);
            // Act & Assert
            await expect(clientService.getByIdClient(mockId)).rejects.toThrow('Client not found');
        });
    });
});