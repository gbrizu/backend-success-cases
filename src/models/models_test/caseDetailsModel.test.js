const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Usar una base de datos en memoria para pruebas

// Definir el modelo CaseDetailsModel
const CaseDetailsModel = sequelize.define('CaseDetail', {
  image_detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  video_detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text_detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'case_details',
  timestamps: false,
});

describe('CaseDetailsModel', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincronizar el modelo con la base de datos
  });

  afterAll(async () => {
    await sequelize.close(); // Cerrar la conexión con la base de datos
  });

  it('should create a new case detail', async () => {
    const caseDetail = await CaseDetailsModel.create({
      image_detail: 'New image detail',
      video_detail: 'New video detail',
      text_detail: 'New text detail',
    });

    expect(caseDetail.image_detail).toBe('New image detail');
    expect(caseDetail.video_detail).toBe('New video detail');
    expect(caseDetail.text_detail).toBe('New text detail');
  });

  it('should find a case detail by ID', async () => {
    const caseDetail = await CaseDetailsModel.create({
      image_detail: 'Sample image detail',
      video_detail: 'Sample video detail',
      text_detail: 'Sample text detail',
    });

    const foundCaseDetail = await CaseDetailsModel.findByPk(caseDetail.id);

    expect(foundCaseDetail.image_detail).toBe('Sample image detail');
    expect(foundCaseDetail.video_detail).toBe('Sample video detail');
    expect(foundCaseDetail.text_detail).toBe('Sample text detail');
  });

  it('should update a case detail', async () => {
    const caseDetail = await CaseDetailsModel.create({
      image_detail: 'Old image detail',
      video_detail: 'Old video detail',
      text_detail: 'Old text detail',
    });

    await caseDetail.update({
      image_detail: 'Updated image detail',
      video_detail: 'Updated video detail',
      text_detail: 'Updated text detail',
    });

    expect(caseDetail.image_detail).toBe('Updated image detail');
    expect(caseDetail.video_detail).toBe('Updated video detail');
    expect(caseDetail.text_detail).toBe('Updated text detail');
  });

  it('should delete a case detail', async () => {
    const caseDetail = await CaseDetailsModel.create({
      image_detail: 'Delete image detail',
      video_detail: 'Delete video detail',
      text_detail: 'Delete text detail',
    });

    await caseDetail.destroy();

    const deletedCaseDetail = await CaseDetailsModel.findByPk(caseDetail.id);
    expect(deletedCaseDetail).toBeNull();
  });
});