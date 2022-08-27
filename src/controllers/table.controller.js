const tableService = require('../services/table.service');
const { ErrorHandler } = require('../middlewares/errorhandler/error.handler');

const findAllTeamsByPositionController = async (req, res) => {
  try {
    const allteams = await tableService.findAllTeamsByPositionService();
    if (!allteams || allteams.length === 0)
      throw { name: 'NotFoundError', message: 'Nenhum time encontrado' };
    res.status(200).send(allteams);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

const createTableByIdController = async (req, res) => {
  try {
    const teamTable = await tableService.createTableByIdService(req.body);
    if (!teamTable)
      throw { name: 'NotFoundError', message: 'Time não encontrado' };
    res.status(200).send(teamTable);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

module.exports = {
  findAllTeamsByPositionController,
  createTableByIdController,
};
