const projectTypeService = require('../projectTypeService');
const ProjectTypeModel = require('../models/projectTypeModel');

describe('projectTypeService', () => {
    // Verifica que getAllProjectType devuelva todos los tipos de proyectos.
    describe('getAllProjectType', () => {
        it('should return all project types', async () => {
        // Arrange
        const mockProjectTypes = [
            { id: 1, name: 'Type 1' },
            { id: 2, name: 'Type 2' }
        ];
        jest.spyOn(ProjectTypeModel, 'find').mockResolvedValue(mockProjectTypes);

        // Act
        const result = await projectTypeService.getAllProjectType();

        // Assert
        expect(result).toEqual(mockProjectTypes);
        });

        // Verifica que getAllProjectType devuelva un array vacío si no hay tipos de proyectos.
        it('should return an empty array if no project types are found', async () => {
        // Arrange
        jest.spyOn(ProjectTypeModel, 'find').mockResolvedValue([]);

        // Act
        const result = await projectTypeService.getAllProjectType();

        // Assert
        expect(result).toEqual([]);
        });

        // Verifica que getAllProjectType lance un error si hay un problema al recuperar los tipos de proyectos.
        it('should throw an error if there is a problem retrieving project types', async () => {
        // Arrange
        jest.spyOn(ProjectTypeModel, 'find').mockRejectedValue(new Error('Database error'));

        // Act & Assert
        await expect(projectTypeService.getAllProjectType()).rejects.toThrow('Database error');
        });
    });
});