const TeamEntity = require('../entities/team.entity');
// const times = require('../mocks/times');
const Team = require('../models/team.model');

/*   SERVICES   */
/*   GET_ALL    */
const findAllTimesService = async () => {
  const allTeams = await Team.find();
  return allTeams;
};

/*   GET_BY_ID   */
const findByIdTimeService = async (id) => {
  const byIdTeam = await Team.findById(id);
  return byIdTeam;
};

/*   GET_TABELA   */
const findAllTimesByPositionService = async () => {
  const allTeams = await Team.find();
  const allTeamsTable = TeamEntity.teamsSortedByPoints(allTeams);
  return allTeamsTable;
};

/*   POST_TIME   */
const createTimeService = async (newTime) => {
  try {
    newTime.updateTeamStats();
    let createdTeam = await Team.create(newTime.getTeam());
    await updateDataBasePositions();
    createdTeam = await Team.findById(createdTeam._id);
    return createdTeam;
  } catch (err) {
    return err.message;
  }
};

/*   UPDATE_BY_ID   */
const updateTimeService = (timeEdited) => {
  try {
    const timeIndex = times.findIndex(
      (team) => team.time.time_id === timeEdited.id,
    );

    timeEdited.updateTeamStats();
    timeIndex !== -1
      ? (times[timeIndex] = timeEdited.getTeam())
      : times.push(timeEdited.getTeam());

    TeamEntity.updateTeamsPositions(times);

    return times.find((time) => time.time.time_id === timeEdited.id);
  } catch (err) {
    return err.message;
  }
};

/*   DELETE_BY_ID   */
const deleteTimeService = async (id) => {
  try {
    const deletedTeam = await Team.findByIdAndDelete(id);
    await updateDataBasePositions();
    return deletedTeam;
  } catch (err) {
    return err.message;
  }
};

/*   END OF SERVICES   */
const updateDataBasePositions = async () => {
  const sortedTeams = TeamEntity.updateTeamsPositions(await Team.find());
  for (const team of sortedTeams) {
    await Team.findByIdAndUpdate(team._id.valueOf(), { posicao: team.posicao });
  }
};

const findTeamByName = async (teamParam) => {
  const teamFound = await Team.findOne({
    'time.nome_popular': teamParam.nome,
  });
  return teamFound;
};

// EXPORTS
module.exports = {
  findAllTimesService,
  findByIdTimeService,
  findAllTimesByPositionService,
  createTimeService,
  updateTimeService,
  deleteTimeService,
  TeamEntity,
};
