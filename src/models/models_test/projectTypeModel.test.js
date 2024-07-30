const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const ProjectTypeModel = require('./projectTypeModel');

// Definir el modelo ProjectTypeModel para la base de datos en memoria
ProjectTypeModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'ProjectType',
    tableName: 'project_type',
  }
);

describe('ProjectTypeModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new project type', async () => {
    const projectType = await ProjectTypeModel.create({
      name: 'New Project Type',
    });

    expect(projectType.name).toBe('New Project Type');
  });

  it('should find a project type by ID', async () => {
    const projectType = await ProjectTypeModel.create({
      name: 'Another Project Type',
    });

    const foundProjectType = await ProjectTypeModel.findByPk(projectType.id);

    expect(foundProjectType.name).toBe('Another Project Type');
  });

  it('should update a project type', async () => {
    const projectType = await ProjectTypeModel.create({
      name: 'Old Project Type',
    });

    await projectType.update({
      name: 'Updated Project Type',
    });

    expect(projectType.name).toBe('Updated Project Type');
  });

  it('should delete a project type', async () => {
    const projectType = await ProjectTypeModel.create({
      name: 'Temporary Project Type',
    });

    await projectType.destroy();

    const deletedProjectType = await ProjectTypeModel.findByPk(projectType.id);
    expect(deletedProjectType).toBeNull();
  });
});