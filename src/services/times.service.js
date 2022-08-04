const TeamEntity = require('../entities/team.entity');
const times = require('../mocks/times');

/*   SERVICES   */
/*   GET_ALL    */
const findAllTimesService = () => {
  return times;
};

/*   GET_BY_ID   */
const findByIdTimeService = (id) => {
  return times.find((time) => time.time.time_id === id);
};

/*   GET_TABELA   */
const findAllTimesByPositionService = () => {
  return TeamEntity.teamsSortedByPoints(times);
};

/*   POST_TIME   */
const createTimeService = (newTime) => {
  try {
    newTime.id = TeamEntity.findFreeId(times);
    newTime.updateTeamStats();
    times.push(newTime.getTeam());
    TeamEntity.updateTeamsPositions(times);
    newTime.posicao = times[times.length - 1].posicao;

    return newTime.getTeam();
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
const deleteTimeService = (id) => {
  try {
    const timeIndex = times.findIndex((team) => team.time.time_id === id);

    if (timeIndex === -1) throw new Error('ID not found.');

    const deletedTeam = times.splice(timeIndex, 1);
    TeamEntity.updateTeamsPositions(times);

    return deletedTeam;
  } catch (err) {
    return err.message;
  }
};

/*   END OF SERVICES   */

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
