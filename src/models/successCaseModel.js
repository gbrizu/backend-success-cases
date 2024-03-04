const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js'); 
const IndustryModel = require('./industryModel');
const ClientModel = require('./clientModel.js');
const ProjectTypeModel = require('./projectTypeModel.js');
const ContactModel = require('./contactModel.js');
const CaseDetailsModel = require('./caseDetailsModel.js');
const OfferingModel = require('./offeringModel.js');
const TechnologiesModel = require('./technologiesModel.js');
const ChallengesModel = require('./challengesModel.js');
const ImprovementsModel = require('./improvementsModel.js');



class SuccessCaseModel extends Model {}

SuccessCaseModel.init(
  {
    // Atributos del Caso de Éxito.
   
    title: {
      type: DataTypes.STRING,
    },
    startdate: {
      type: DataTypes.DATE, 
    },
    finishdate: {
      type: DataTypes.DATE,
    },
    teamsize: {
      type: DataTypes.INTEGER,
    },
    ispublic: {
      type: DataTypes.BOOLEAN,
    } 
  },
  {
    sequelize,
    modelName: 'SuccessCase', // Nombre del modelo
    tableName: 'successcase', // Nombre de la tabla en la base de datos
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

module.exports = SuccessCaseModel;