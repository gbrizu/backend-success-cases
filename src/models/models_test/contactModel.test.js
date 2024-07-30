const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const ContactModel = require('../contactModel');

// Definir el modelo ContactModel para la base de datos en memoria
ContactModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    surName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'contact',
  }
);

describe('ContactModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new contact', async () => {
    const contact = await ContactModel.create({
      name: 'John',
      surName: 'Doe',
      email: 'john.doe@example.com',
    });

    expect(contact.name).toBe('John');
    expect(contact.surName).toBe('Doe');
    expect(contact.email).toBe('john.doe@example.com');
  });

  it('should find a contact by ID', async () => {
    const contact = await ContactModel.create({
      name: 'Jane',
      surName: 'Doe',
      email: 'jane.doe@example.com',
    });

    const foundContact = await ContactModel.findByPk(contact.id);

    expect(foundContact.name).toBe('Jane');
    expect(foundContact.surName).toBe('Doe');
    expect(foundContact.email).toBe('jane.doe@example.com');
  });

  it('should update a contact', async () => {
    const contact = await ContactModel.create({
      name: 'Old Name',
      surName: 'Old SurName',
      email: 'old.email@example.com',
    });

    await contact.update({
      name: 'New Name',
      surName: 'New SurName',
      email: 'new.email@example.com',
    });

    expect(contact.name).toBe('New Name');
    expect(contact.surName).toBe('New SurName');
    expect(contact.email).toBe('new.email@example.com');
  });

  it('should delete a contact', async () => {
    const contact = await ContactModel.create({
      name: 'Delete',
      surName: 'Me',
      email: 'delete.me@example.com',
    });

    await contact.destroy();

    const deletedContact = await ContactModel.findByPk(contact.id);
    expect(deletedContact).toBeNull();
  });
});