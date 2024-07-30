const projectTypeService = require('../projectTypeService.js');
const ProjectTypeModel = require('../../models/projectTypeModel.js');
describe('projectTypeService', () => {
    describe('getAllProjectType', () => {
        it('should return all project types', async () => {
            const mockProjectTypes = [
                { id: 1, name: 'Type 1' },
                { id: 2, name: 'Type 2' }
            ];
            jest.spyOn(ProjectTypeModel, 'findAll').mockResolvedValue(mockProjectTypes);
            const result = await projectTypeService.getAllProjectType();
            expect(result).toEqual(mockProjectTypes);
        });
        it('should return an empty array if no project types are found', async () => {
            jest.spyOn(ProjectTypeModel, 'findAll').mockResolvedValue([]);
            const result = await projectTypeService.getAllProjectType();
            expect(result).toEqual([]);
        });
        it('should throw an error if there is a problem retrieving project types', async () => {
            // Simula que `findAll` lanza un error
            jest.spyOn(ProjectTypeModel, 'findAll').mockRejectedValue(new Error('Database error'));
            // Verifica que `getAllProjectType` lanza un error con el mensaje esperado
            await expect(projectTypeService.getAllProjectType()).rejects.toThrow('Error al obtener todos los tipos de proyecto desde la base de datos');
        });
    });
});