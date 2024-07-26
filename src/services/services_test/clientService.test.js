const clientService = require('./clientService');
const ClientModel = require('../models/clientModel');


describe('clientService', () => {
    // Verifica que createClient devuelva el cliente creado.
    describe('createClient', () => {
        it('should create a new client', async () => {
        // Arrange
        const mockClientData = { name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
        const mockCreatedClient = { id: 1, ...mockClientData };
        jest.spyOn(ClientModel, 'create').mockResolvedValue(mockCreatedClient);

        // Act
        const result = await clientService.createClient(mockClientData);

        // Assert
        expect(result).toEqual(mockCreatedClient);
        });
        // Verifica que createClient lance un error si los datos del cliente son inválidos.
        it('should throw an error if the client data is invalid', async () => {
        // Arrange
        const mockInvalidData = { name: '', surname: '', email: '' }; // Assuming all fields are required
        jest.spyOn(ClientModel, 'create').mockRejectedValue(new Error('Invalid data'));

        // Act & Assert
        await expect(clientService.createClient(mockInvalidData)).rejects.toThrow('Invalid data');
        });
    });
    
    // Verifica que getByIdClient devuelva el cliente para un ID dado.
    describe('getByIdClient', () => {
        it('should return the client for a given ID', async () => {
        // Arrange
        const mockId = 1;
        const mockClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
        jest.spyOn(ClientModel, 'findById').mockResolvedValue(mockClient);

        // Act
        const result = await clientService.getByIdClient(mockId);

        // Assert
        expect(result).toEqual(mockClient);
        });

        // Verifica que getByIdClient lance un error si el ID no existe.
        it('should throw an error if the ID does not exist', async () => {
        // Arrange
        const mockId = 999;
        jest.spyOn(ClientModel, 'findById').mockResolvedValue(null);

        // Act & Assert
        await expect(clientService.getByIdClient(mockId)).rejects.toThrow('Client not found');
        });
    });
});