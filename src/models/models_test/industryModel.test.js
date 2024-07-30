const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const IndustryModel = require('../industryModel');

// Definir el modelo IndustryModel para la base de datos en memoria
IndustryModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Industry',
    tableName: 'industry',
  }
);

describe('IndustryModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new industry', async () => {
    const industry = await IndustryModel.create({
      name: 'Technology',
    });

    expect(industry.name).toBe('Technology');
  });

  it('should find an industry by ID', async () => {
    const industry = await IndustryModel.create({
      name: 'Healthcare',
    });

    const foundIndustry = await IndustryModel.findByPk(industry.id);

    expect(foundIndustry.name).toBe('Healthcare');
  });

  it('should update an industry', async () => {
    const industry = await IndustryModel.create({
      name: 'Finance',
    });

    await industry.update({
      name: 'Fintech',
    });

    expect(industry.name).toBe('Fintech');
  });

  it('should delete an industry', async () => {
    const industry = await IndustryModel.create({
      name: 'Education',
    });

    await industry.destroy();

    const deletedIndustry = await IndustryModel.findByPk(industry.id);
    expect(deletedIndustry).toBeNull();
  });
});