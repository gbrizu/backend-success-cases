const clientService = require('../clientService');
const clientModel = require('../../models/clientModel.js');

describe('clientService', () => {
    describe('getByIdClient', () => {
        it('should return the client for a given ID', async () => {
            const mockClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
            jest.spyOn(clientModel, 'findByPk').mockResolvedValue(mockClient);
            const result = await clientService.getByIdClient(1);
            expect(result).toEqual(mockClient);
        });
        it('should throw an error if the ID does not exist', async () => {
            jest.spyOn(clientModel, 'findByPk').mockResolvedValue(null);
            await expect(clientService.getByIdClient(1000)).rejects.toThrow('Client not found');
        });
    });
    describe('getAllClients', () => {
        it('should return all clients', async () => {
            const mockClients = [
                { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' },
                { id: 2, name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com' }
            ];
            jest.spyOn(clientModel, 'findAll').mockResolvedValue(mockClients);
            const result = await clientService.getAllClients();
            expect(result).toEqual(mockClients);
        });
        it('should return an empty array if no clients are found', async () => {
            jest.spyOn(clientModel, 'findAll').mockResolvedValue([]);
            const result = await clientService.getAllClients();
            expect(result).toEqual([]);
        });
        it('should throw an error if there is a problem retrieving clients', async () => {
            jest.spyOn(clientModel, 'findAll').mockRejectedValue(new Error('Database error'));
            await expect(clientService.getAllClients()).rejects.toThrow('Error al obtener todos los clientes desde la base de datos');
        });
    });
    describe('createClient', () => {
        it('should create a new client', async () => {
            const mockClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
            jest.spyOn(clientModel, 'create').mockResolvedValue(mockClient);
            const result = await clientService.createClient(mockClient);
            expect(result).toEqual(mockClient);
        });
        it('should throw an error if the email is invalid', async () => {
            await expect(clientService.createClient({ name: 'John', surname: 'Doe', email: 'invalid-email' })).rejects.toThrow('Direccion de correo electronico invalida');
        });
        it('should throw an error if the name is invalid', async () => {
            await expect(clientService.createClient({ name: '123', surname: 'Doe', email: 'john.doe@example.com' })).rejects.toThrow('Nombre invalido');
        });
        it('should throw an error if the surname is invalid', async () => {
            await expect(clientService.createClient({ name: 'John', surname: '123', email: 'john.doe@example.com' })).rejects.toThrow('Apellido invalido');
        });
        it('should throw an error if the client could not be created', async () => {
            jest.spyOn(clientModel, 'create').mockRejectedValue(new Error('Database error'));
            await expect(clientService.createClient({ name: 'John', surname: 'Doe', email: 'john.doe@example.com' })).rejects.toThrow('Error al crear un cliente en la base de datos');
        });
    });
    describe('getAllClients', () => {
        it('should return all clients', async () => {
            const mockClients = [
                { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' },
                { id: 2, name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com' }
            ];
            jest.spyOn(clientModel, 'findAll').mockResolvedValue(mockClients);

            const result = await clientService.getAllClients();

            expect(result).toEqual(mockClients);
        }
        );
        it('should return an empty array if no clients are found', async () => {
            jest.spyOn(clientModel, 'findAll').mockResolvedValue([]);
            const result = await clientService.getAllClients();
            expect(result).toEqual([]);
        });
        it('should throw an error if there is a problem retrieving clients', async () => {
            jest.spyOn(clientModel, 'findAll').mockRejectedValue(new Error('Database error'));
            await expect(clientService.getAllClients()).rejects.toThrow('Error al obtener todos los clientes desde la base de datos');
        });
    }
    );
    describe('createClient', () => {
        it('should create a new client', async () => {
            const mockClient = { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com' };
            jest.spyOn(clientModel, 'create').mockResolvedValue(mockClient);

            const result = await clientService.createClient(mockClient);

            expect(result).toEqual(mockClient);
        }
        );
        it('should throw an error if the client could not be created', async () => {
            jest.spyOn(clientModel, 'create').mockRejectedValue(new Error('Database error'));
            await expect(clientService.createClient({})).rejects.toThrow('Database error');
        });
    }
    );

});
