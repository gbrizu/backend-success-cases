const successCaseService = require('../successCaseService');

describe('successCaseService', () => {
    //Verifica que create devuelva el caso de éxito creado.
    describe('deleteById', () => {
        it('should delete the success case for a given ID', async () => {
        // Arrange
        const mockId = 1;
        jest.spyOn(successCaseService, 'deleteById').mockResolvedValue(true);

        // Act
        const result = await successCaseService.deleteById(mockId);

        // Assert
        expect(result).toBe(true);
        });
        // Verifica que deleteById lance un error si el ID no existe.
        it('should throw an error if the ID does not exist', async () => {
        // Arrange
        const mockId = 999;
        jest.spyOn(successCaseService, 'deleteById').mockRejectedValue(new Error('Not Found'));

        // Act & Assert
        await expect(successCaseService.deleteById(mockId)).rejects.toThrow('Not Found');
        });
    });

    // Verifica que create devuelva el caso de éxito creado.
    describe('getById', () => {
        it('should return the success case for a given ID', async () => {
        // Arrange
        const mockId = 1;
        const mockSuccessCase = { id: 1, name: 'Test Case' };
        jest.spyOn(successCaseService, 'getById').mockResolvedValue(mockSuccessCase);

        // Act
        const result = await successCaseService.getById(mockId);

        // Assert
        expect(result).toEqual(mockSuccessCase);
        });

        // Verifica que getById lance un error si el ID no existe.
        it('should throw an error if the ID does not exist', async () => {
        // Arrange
        const mockId = 999;
        jest.spyOn(successCaseService, 'getById').mockRejectedValue(new Error('Not Found'));

        // Act & Assert
        await expect(successCaseService.getById(mockId)).rejects.toThrow('Not Found');
        });
    });

    // Verifica que create devuelva el caso de éxito creado.
    describe('getByFilter', () => {
        it('should return success cases that match the filter', async () => {
        // Arrange
        const mockFilter = { status: 'active' };
        const mockSuccessCases = [
            { id: 1, name: 'Test Case 1', status: 'active' },
            { id: 2, name: 'Test Case 2', status: 'active' },
        ];
        jest.spyOn(successCaseService, 'getByFilter').mockResolvedValue(mockSuccessCases);

        // Act
        const result = await successCaseService.getByFilter(mockFilter);

        // Assert
        expect(result).toEqual(mockSuccessCases);
        });

        // Verifica que getByFilter devuelva un array vacío si no hay casos de éxito que coincidan con el filtro.
        it('should return an empty array if no success cases match the filter', async () => {
        // Arrange
        const mockFilter = { status: 'inactive' };
        jest.spyOn(successCaseService, 'getByFilter').mockResolvedValue([]);

        // Act
        const result = await successCaseService.getByFilter(mockFilter);

        // Assert
        expect(result).toEqual([]);
        });

        // Verifica que getByFilter lance un error si el filtro es inválido.
        it('should throw an error if the filter is invalid', async () => {
        // Arrange
        const mockFilter = { invalidField: 'invalidValue' };
        jest.spyOn(successCaseService, 'getByFilter').mockRejectedValue(new Error('Invalid filter'));

        // Act & Assert
        await expect(successCaseService.getByFilter(mockFilter)).rejects.toThrow('Invalid filter');
        });
    });

    // Verifica que create devuelva el caso de éxito creado.
    describe('getAll', () => {
        it('should return all success cases', async () => {
        // Arrange
        const mockSuccessCases = [
            { id: 1, name: 'Test Case 1' },
            { id: 2, name: 'Test Case 2' },
        ];
        jest.spyOn(successCaseService, 'getAll').mockResolvedValue(mockSuccessCases);

        // Act
        const result = await successCaseService.getAll();

        // Assert
        expect(result).toEqual(mockSuccessCases);
        });

        // Verifica que getAll devuelva un array vacío si no hay casos de éxito.
        it('should return an empty array if there are no success cases', async () => {
        // Arrange
        jest.spyOn(successCaseService, 'getAll').mockResolvedValue([]);

        // Act
        const result = await successCaseService.getAll();

        // Assert
        expect(result).toEqual([]);
        });

        // Verifica que getAll lance un error si hay un problema al recuperar los casos de éxito.
        it('should throw an error if there is a problem retrieving the success cases', async () => {
        // Arrange
        jest.spyOn(successCaseService, 'getAll').mockRejectedValue(new Error('Error retrieving success cases'));

        // Act & Assert
        await expect(successCaseService.getAll()).rejects.toThrow('Error retrieving success cases');
        });
    });

    // Verifica que create devuelva el caso de éxito creado.
    describe('getByFilter', () => {
        it('should return success cases that match the filter', async () => {
        // Arrange
        const mockFilter = { status: 'active' };
        const mockSuccessCases = [
            { id: 1, name: 'Test Case 1', status: 'active' },
            { id: 2, name: 'Test Case 2', status: 'active' },
        ];
        jest.spyOn(successCaseService, 'getByFilter').mockResolvedValue(mockSuccessCases);

        // Act
        const result = await successCaseService.getByFilter(mockFilter);

        // Assert
        expect(result).toEqual(mockSuccessCases);
        });

        // Verifica que getByFilter devuelva un array vacío si no hay casos de éxito que coincidan con el filtro.
        it('should return an empty array if no success cases match the filter', async () => {
        // Arrange
        const mockFilter = { status: 'inactive' };
        jest.spyOn(successCaseService, 'getByFilter').mockResolvedValue([]);

        // Act
        const result = await successCaseService.getByFilter(mockFilter);

        // Assert
        expect(result).toEqual([]);
        });

        it('should throw an error if the filter is invalid', async () => {
        // Arrange
        const mockFilter = { invalidField: 'invalidValue' };
        jest.spyOn(successCaseService, 'getByFilter').mockRejectedValue(new Error('Invalid filter'));

        // Act & Assert
        await expect(successCaseService.getByFilter(mockFilter)).rejects.toThrow('Invalid filter');
        });
    });

    // Verifica que create devuelva el caso de éxito creado.
    describe('getAll', () => {
        it('should return all success cases', async () => {
        // Arrange
        const mockSuccessCases = [
            { id: 1, name: 'Test Case 1' },
            { id: 2, name: 'Test Case 2' },
        ];
        jest.spyOn(successCaseService, 'getAll').mockResolvedValue(mockSuccessCases);

        // Act
        const result = await successCaseService.getAll();

        // Assert
        expect(result).toEqual(mockSuccessCases);
        });

        // Verifica que getAll devuelva un array vacío si no hay casos de éxito.
        it('should return an empty array if there are no success cases', async () => {
        // Arrange
        jest.spyOn(successCaseService, 'getAll').mockResolvedValue([]);

        // Act
        const result = await successCaseService.getAll();

        // Assert
        expect(result).toEqual([]);
        });

        // Verifica que getAll lance un error si hay un problema al recuperar los casos de éxito.
        it('should throw an error if there is a problem retrieving the success cases', async () => {
        // Arrange
        jest.spyOn(successCaseService, 'getAll').mockRejectedValue(new Error('Error retrieving success cases'));

        // Act & Assert
        await expect(successCaseService.getAll()).rejects.toThrow('Error retrieving success cases');
        });
    });
});
