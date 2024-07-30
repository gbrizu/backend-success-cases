const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas
const SuccessCaseModel = require('./successCaseModel');
const IndustryModel = require('./industryModel');
const ClientModel = require('./clientModel');
const ProjectTypeModel = require('./projectTypeModel');
const ContactModel = require('./contactModel');
const CaseDetailsModel = require('./caseDetailsModel');
const OfferingModel = require('./offeringModel');
const TechnologiesModel = require('./technologiesModel');
const ChallengesModel = require('./challengesModel');
const ImprovementsModel = require('./improvementsModel');

// Definir los modelos para la base de datos en memoria
IndustryModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Industry' });
ClientModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Client' });
ProjectTypeModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'ProjectType' });
ContactModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Contact' });
CaseDetailsModel.init({ details: DataTypes.STRING }, { sequelize, modelName: 'CaseDetails' });
OfferingModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Offering' });
TechnologiesModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Technologies' });
ChallengesModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Challenges' });
ImprovementsModel.init({ name: DataTypes.STRING }, { sequelize, modelName: 'Improvements' });

SuccessCaseModel.init(
  {
    title: DataTypes.STRING,
    startdate: DataTypes.DATE,
    finishdate: DataTypes.DATE,
    teamsize: DataTypes.INTEGER,
    ispublic: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: 'SuccessCase',
    tableName: 'successcase',
  }
);

SuccessCaseModel.belongsTo(IndustryModel, { foreignKey: 'industryid' });
SuccessCaseModel.belongsTo(ClientModel, { foreignKey: 'clientid' });
SuccessCaseModel.belongsTo(ProjectTypeModel, { foreignKey: 'projecttypeid' });
SuccessCaseModel.belongsTo(ContactModel, { foreignKey: 'contactid' });
SuccessCaseModel.belongsTo(CaseDetailsModel, { foreignKey: 'casedetailsid' });
SuccessCaseModel.belongsTo(OfferingModel, { foreignKey: 'offeringid' });
SuccessCaseModel.belongsTo(TechnologiesModel, { foreignKey: 'technologyid' });
SuccessCaseModel.belongsTo(ChallengesModel, { foreignKey: 'challengeid' });
SuccessCaseModel.belongsTo(ImprovementsModel, { foreignKey: 'improvementid' });

describe('SuccessCaseModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new success case', async () => {
    const successCase = await SuccessCaseModel.create({
      title: 'New Success Case',
      startdate: new Date(),
      finishdate: new Date(),
      teamsize: 5,
      ispublic: true,
    });

    expect(successCase.title).toBe('New Success Case');
    expect(successCase.teamsize).toBe(5);
    expect(successCase.ispublic).toBe(true);
  });

  it('should find a success case by ID', async () => {
    const successCase = await SuccessCaseModel.create({
      title: 'Another Success Case',
      startdate: new Date(),
      finishdate: new Date(),
      teamsize: 10,
      ispublic: false,
    });

    const foundSuccessCase = await SuccessCaseModel.findByPk(successCase.id);

    expect(foundSuccessCase.title).toBe('Another Success Case');
    expect(foundSuccessCase.teamsize).toBe(10);
    expect(foundSuccessCase.ispublic).toBe(false);
  });

  it('should update a success case', async () => {
    const successCase = await SuccessCaseModel.create({
      title: 'Old Success Case',
      startdate: new Date(),
      finishdate: new Date(),
      teamsize: 3,
      ispublic: false,
    });

    await successCase.update({
      title: 'Updated Success Case',
      teamsize: 7,
    });

    expect(successCase.title).toBe('Updated Success Case');
    expect(successCase.teamsize).toBe(7);
  });

  it('should delete a success case', async () => {
    const successCase = await SuccessCaseModel.create({
      title: 'Temporary Success Case',
      startdate: new Date(),
      finishdate: new Date(),
      teamsize: 2,
      ispublic: true,
    });

    await successCase.destroy();

    const deletedSuccessCase = await SuccessCaseModel.findByPk(successCase.id);
    expect(deletedSuccessCase).toBeNull();
  });
});