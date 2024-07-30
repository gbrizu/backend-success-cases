const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const OfferingModel = require('../offeringModel');

// Definir el modelo OfferingModel para la base de datos en memoria
OfferingModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Offering',
    tableName: 'offering',
  }
);

describe('OfferingModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new offering', async () => {
    const offering = await OfferingModel.create({
      name: 'New Offering',
      description: 'This is a new offering',
    });

    expect(offering.name).toBe('New Offering');
    expect(offering.description).toBe('This is a new offering');
  });

  it('should find an offering by ID', async () => {
    const offering = await OfferingModel.create({
      name: 'Another Offering',
      description: 'This is another offering',
    });

    const foundOffering = await OfferingModel.findByPk(offering.id);

    expect(foundOffering.name).toBe('Another Offering');
    expect(foundOffering.description).toBe('This is another offering');
  });

  it('should update an offering', async () => {
    const offering = await OfferingModel.create({
      name: 'Old Offering',
      description: 'This is an old offering',
    });

    await offering.update({
      name: 'Updated Offering',
      description: 'This is an updated offering',
    });

    expect(offering.name).toBe('Updated Offering');
    expect(offering.description).toBe('This is an updated offering');
  });

  it('should delete an offering', async () => {
    const offering = await OfferingModel.create({
      name: 'Temporary Offering',
      description: 'This is a temporary offering',
    });

    await offering.destroy();

    const deletedOffering = await OfferingModel.findByPk(offering.id);
    expect(deletedOffering).toBeNull();
  });
});