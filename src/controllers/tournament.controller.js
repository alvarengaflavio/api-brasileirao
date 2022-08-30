const tournamentService = require('../services/tournament.service');
const { ErrorHandler } = require('../middlewares/errorhandler/error.handler');

const findAllTeamsByPositionController = async (req, res) => {
  try {
    const allteams = await tournamentService.findAllTeamsByPositionService();
    if (!allteams || allteams.length === 0)
      throw { name: 'NotFoundError', message: 'Nenhum time encontrado' };
    res.status(200).send(allteams);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

const createTableByIdController = async (req, res) => {
  try {
    const teamTable = await tournamentService.createTableByIdService(req.body);
    if (!teamTable)
      throw { name: 'NotFoundError', message: 'Time não encontrado' };
    res.status(200).send(teamTable);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

const createTournamentController = async (req, res) => {
  try {
    const tournament = await tournamentService.createTournamentService(
      req.body,
    );
    if (!tournament)
      throw { name: 'ConflictError', message: 'Torneio já existe' };
    res.status(201).send(tournament);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

////////////////////////////////////////////////////////////////////////////////////
module.exports = {
  findAllTeamsByPositionController,
  createTableByIdController,
  createTournamentController,
};
