const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const ImprovementsModel = require('./improvementsModel');

// Definir el modelo ImprovementsModel para la base de datos en memoria
ImprovementsModel.init(
  {
    image_imp: {
      type: DataTypes.TEXT,
    },
    video_imp: {
      type: DataTypes.TEXT,
    },
    text_imp: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Improvements',
    tableName: 'improvement',
  }
);

describe('ImprovementsModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new improvement', async () => {
    const improvement = await ImprovementsModel.create({
      image_imp: 'image_url',
      video_imp: 'video_url',
      text_imp: 'Some improvement text',
    });

    expect(improvement.image_imp).toBe('image_url');
    expect(improvement.video_imp).toBe('video_url');
    expect(improvement.text_imp).toBe('Some improvement text');
  });

  it('should find an improvement by ID', async () => {
    const improvement = await ImprovementsModel.create({
      image_imp: 'image_url_2',
      video_imp: 'video_url_2',
      text_imp: 'Another improvement text',
    });

    const foundImprovement = await ImprovementsModel.findByPk(improvement.id);

    expect(foundImprovement.image_imp).toBe('image_url_2');
    expect(foundImprovement.video_imp).toBe('video_url_2');
    expect(foundImprovement.text_imp).toBe('Another improvement text');
  });

  it('should update an improvement', async () => {
    const improvement = await ImprovementsModel.create({
      image_imp: 'old_image_url',
      video_imp: 'old_video_url',
      text_imp: 'Old improvement text',
    });

    await improvement.update({
      image_imp: 'new_image_url',
      video_imp: 'new_video_url',
      text_imp: 'New improvement text',
    });

    expect(improvement.image_imp).toBe('new_image_url');
    expect(improvement.video_imp).toBe('new_video_url');
    expect(improvement.text_imp).toBe('New improvement text');
  });

  it('should delete an improvement', async () => {
    const improvement = await ImprovementsModel.create({
      image_imp: 'delete_image_url',
      video_imp: 'delete_video_url',
      text_imp: 'Delete improvement text',
    });

    await improvement.destroy();

    const deletedImprovement = await ImprovementsModel.findByPk(improvement.id);
    expect(deletedImprovement).toBeNull();
  });
});