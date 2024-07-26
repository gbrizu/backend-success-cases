const clientService = require('../clientService');

describe('clientService', () => {
    // Verifica que getAllClient devuelva todos los clientes.
    describe('getByIdClient', () => {
        it('should return the client for a given ID', async () => {
            // Arrange
            const mockId = 1;
            const mockClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
            jest.spyOn(clientService, 'getByIdClient').mockResolvedValue(mockClient);

            // Act
            const result = await clientService.getByIdClient(mockId);

            // Assert
            expect(result).toEqual(mockClient);
        });

        // Verifica que getByIdClient lance un error si el ID no existe.

        it('should throw an error if the ID does not exist', async () => {
            // Arrange
            const mockId = 1;
            jest.spyOn(clientService, 'getByIdClient').mockResolvedValue(null);

            // Act & Assert
            await expect(clientService.getByIdClient(mockId)).rejects.toThrow('Client not found');
        });
    });
});