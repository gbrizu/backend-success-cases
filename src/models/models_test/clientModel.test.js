const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const ClientModel = require('./clientModel');

// Definir el modelo ClientModel para la base de datos en memoria
ClientModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  },
  {
    sequelize,
    modelName: 'Client',
    tableName: 'client',
  }
);

describe('ClientModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new client', async () => {
    const client = await ClientModel.create({
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      id: 1
    });

    expect(client.name).toBe('John');
    expect(client.surname).toBe('Doe');
    expect(client.email).toBe('john.doe@example.com');
    expect(client.id).toBe(1);
  });

  it('should find a client by ID', async () => {
    const client = await ClientModel.create({
      name: 'Jane',
      surname: 'Doe',
      email: 'jane.doe@example.com',
      id: 2
    });

    const foundClient = await ClientModel.findByPk(client.id);

    expect(foundClient.name).toBe('Jane');
    expect(foundClient.surname).toBe('Doe');
    expect(foundClient.email).toBe('jane.doe@example.com');
    expect(foundClient.id).toBe(2);
  });

  it('should update a client', async () => {
    const client = await ClientModel.create({
      name: 'Old Name',
      surname: 'Old Surname',
      email: 'old.email@example.com',
      id: 3
    });

    await client.update({
      name: 'New Name',
      surname: 'New Surname',
      email: 'new.email@example.com',
    });

    expect(client.name).toBe('New Name');
    expect(client.surname).toBe('New Surname');
    expect(client.email).toBe('new.email@example.com');
  });

  it('should delete a client', async () => {
    const client = await ClientModel.create({
      name: 'Delete',
      surname: 'Me',
      email: 'delete.me@example.com',
      id: 4
    });

    await client.destroy();

    const deletedClient = await ClientModel.findByPk(client.id);
    expect(deletedClient).toBeNull();
  });
});