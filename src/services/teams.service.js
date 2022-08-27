const { TeamEntity } = require('../entities/team.entity');
const { ObjEntity } = require('../entities/obj.entity');
const Team = require('../models/team.model');

/*   SERVICES   */
/*   GET_ALL    */
const findAllTeamsService = async () => {
  const allTeams = await Team.find();
  return allTeams;
};

/*   GET_BY_ID   */
const findTeamByIdService = async (id) => {
  const chosenTime = await Team.findById(id);
  return chosenTime;
};

/*   POST_TIME   */
const createTeamService = async (newTime) => {
  try {
    let createdTeam = await Team.create(newTime);
    return createdTeam;
  } catch (err) {
    throw new Error(err.message);
  }
};

/*   UPDATE_BY_ID   */
/* The default value of findByIdAndUpdate/findOneAndUpdate has changed to returning the old doc. So you need to explicitly set the option to true to get the new version of the doc, after the update is applied */
const updateTeamService = async (id, editedTeam) => {
  const updatedTeam = await Team.findByIdAndUpdate(id, editedTeam, {
    new: true,
  });
  return updatedTeam;
};

/*   DELETE_BY_ID   */
const deleteTeamService = async (id) => {
  const deletedTeam = await Team.findByIdAndDelete(id);
  return deletedTeam;
};

/////////////////////////////////////////////////////////////////////////////////////////////
/*   SERVICES Intern Functions    */
const updateDataBasePositions = async () => {
  const sortedTeams = TeamEntity.updateTeamsPositions(await Team.find());
  for (const team of sortedTeams) {
    await Team.findByIdAndUpdate(team._id.valueOf(), { posicao: team.posicao });
  }
};

const findTeamByName = async (teamParam) => {
  const teamFound = await Team.findOne({
    nome_popular: teamParam.nome,
  });
  return teamFound;
};

// EXPORTS
module.exports = {
  findAllTeamsService,
  findTeamByIdService,
  createTeamService,
  updateTeamService,
  deleteTeamService,
};
