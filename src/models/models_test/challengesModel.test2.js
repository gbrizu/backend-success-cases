const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const ChallengesModel = require('./challengesModel');

// Definir el modelo ChallengesModel para la base de datos en memoria
ChallengesModel.init(
  {
    image_ch: {
      type: DataTypes.TEXT,
    },
    video_ch: {
      type: DataTypes.TEXT,
    },
    text_ch: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Challenges',
    tableName: 'challenge',
  }
);

describe('ChallengesModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new challenge', async () => {
    const challenge = await ChallengesModel.create({
      image_ch: 'New image challenge',
      video_ch: 'New video challenge',
      text_ch: 'New text challenge',
    });

    expect(challenge.image_ch).toBe('New image challenge');
    expect(challenge.video_ch).toBe('New video challenge');
    expect(challenge.text_ch).toBe('New text challenge');
  });

  it('should find a challenge by ID', async () => {
    const challenge = await ChallengesModel.create({
      image_ch: 'Sample image challenge',
      video_ch: 'Sample video challenge',
      text_ch: 'Sample text challenge',
    });

    const foundChallenge = await ChallengesModel.findByPk(challenge.id);

    expect(foundChallenge.image_ch).toBe('Sample image challenge');
    expect(foundChallenge.video_ch).toBe('Sample video challenge');
    expect(foundChallenge.text_ch).toBe('Sample text challenge');
  });

  it('should update a challenge', async () => {
    const challenge = await ChallengesModel.create({
      image_ch: 'Old image challenge',
      video_ch: 'Old video challenge',
      text_ch: 'Old text challenge',
    });

    await challenge.update({
      image_ch: 'Updated image challenge',
      video_ch: 'Updated video challenge',
      text_ch: 'Updated text challenge',
    });

    expect(challenge.image_ch).toBe('Updated image challenge');
    expect(challenge.video_ch).toBe('Updated video challenge');
    expect(challenge.text_ch).toBe('Updated text challenge');
  });

  it('should delete a challenge', async () => {
    const challenge = await ChallengesModel.create({
      image_ch: 'Delete image challenge',
      video_ch: 'Delete video challenge',
      text_ch: 'Delete text challenge',
    });

    await challenge.destroy();

    const deletedChallenge = await ChallengesModel.findByPk(challenge.id);
    expect(deletedChallenge).toBeNull();
  });
});