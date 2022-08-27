const teamsService = require('../services/teams.service');
const { TeamEntity } = require('../entities/team.entity');
const { ErrorHandler } = require('../middlewares/errorhandler/error.handler');

/* CONTROLLERS */
/*   GET_ALL   */
const findAllTeamsControler = async (req, res) => {
  try {
    const allTimes = await teamsService.findAllTeamsService();
    if (allTimes.length === 0)
      throw { name: 'NotFoundError', message: 'No teams found' };
    return res.status(200).send(allTimes);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

/*   GET_BY_ID   */
const findTeamByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const chosenTime = await teamsService.findTeamByIdService(idParam);
    if (!chosenTime) throw { name: 'NotFoundError', message: 'Team not found' };
    res.send(chosenTime);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

/*   POST_TIME   */
const createTeamController = async (req, res) => {
  try {
    const newTeam = await teamsService.createTeamService(req.body);
    if (!newTeam)
      throw { name: 'ConflictError', message: 'Error creating new team!' };
    res.status(201).send(newTeam);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

/*   UPDATE_BY_ID   */
const updateTeamController = async (req, res) => {
  try {
    const updatedTime = await teamsService.updateTeamService(
      req.params.id,
      req.body,
    );
    if (!updatedTime)
      throw { name: 'NotFoundError', message: 'Team not found' };
    res.send(updatedTime);
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

/*   DELETE_BY_ID   */
const deleteTeamController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const deletedTime = await teamsService.deleteTeamService(idParam);
    res.send({ message: 'Team successfully deleted!', team: deletedTime });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

/*   END OF CONTROLLERS   */

module.exports = {
  findAllTeamsControler,
  findTeamByIdController,
  createTeamController,
  updateTeamController,
  deleteTeamController,
};
