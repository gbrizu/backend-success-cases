const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const TechnologiesModel = require('../technologiesModel');

// Inicializar el modelo para la base de datos en memoria
TechnologiesModel.init(
  {
    image_tech: {
      type: DataTypes.TEXT,
    },
    video_tech: {
      type: DataTypes.TEXT,
    },
    text_tech: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Technology',
    tableName: 'technology',
  }
);

describe('TechnologiesModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new technology', async () => {
    const technology = await TechnologiesModel.create({
      image_tech: 'image_url',
      video_tech: 'video_url',
      text_tech: 'Some text about the technology',
    });

    expect(technology.image_tech).toBe('image_url');
    expect(technology.video_tech).toBe('video_url');
    expect(technology.text_tech).toBe('Some text about the technology');
  });

  it('should find a technology by ID', async () => {
    const technology = await TechnologiesModel.create({
      image_tech: 'another_image_url',
      video_tech: 'another_video_url',
      text_tech: 'Another text about the technology',
    });

    const foundTechnology = await TechnologiesModel.findByPk(technology.id);

    expect(foundTechnology.image_tech).toBe('another_image_url');
    expect(foundTechnology.video_tech).toBe('another_video_url');
    expect(foundTechnology.text_tech).toBe('Another text about the technology');
  });

  it('should update a technology', async () => {
    const technology = await TechnologiesModel.create({
      image_tech: 'old_image_url',
      video_tech: 'old_video_url',
      text_tech: 'Old text about the technology',
    });

    await technology.update({
      image_tech: 'new_image_url',
      video_tech: 'new_video_url',
      text_tech: 'New text about the technology',
    });

    expect(technology.image_tech).toBe('new_image_url');
    expect(technology.video_tech).toBe('new_video_url');
    expect(technology.text_tech).toBe('New text about the technology');
  });

  it('should delete a technology', async () => {
    const technology = await TechnologiesModel.create({
      image_tech: 'temp_image_url',
      video_tech: 'temp_video_url',
      text_tech: 'Temporary text about the technology',
    });

    await technology.destroy();

    const deletedTechnology = await TechnologiesModel.findByPk(technology.id);
    expect(deletedTechnology).toBeNull();
  });
});