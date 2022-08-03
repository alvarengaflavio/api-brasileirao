const times = require('../mocks/times');

const findAllTimesService = () => {
  return times;
};

const findByIdTimeService = (id) => {
  return times.find((time) => time.time.time_id === id);
};

const findAllTimesByPositionService = () => {
  return timesSortedByPoints();
};

const createTimeService = (newTime) => {
  const newId = findFreeId();

  updateTimeStats(newTime, newId);
  times.push(newTime);
  updateTimesPositions();

  return newTime;
};

const updateTimeService = (id, timeEdited) => {
  const timeIndex = times.findIndex((team) => team.time.time_id === id);

  timeIndex !== -1
    ? ((times[timeIndex] = timeEdited), updateTimeStats(times[timeIndex], id))
    : (times.push(timeEdited), updateTimeStats(times[times.length - 1], id));

  updateTimesPositions();

  return times.find((time) => time.time.time_id === id);
};

const deleteTimeService = (id) => {
  const timeIndex = times.findIndex((team) => team.time.time_id === id);
  const deletedTeam = times.splice(timeIndex, 1);
  updateTimesPositions();
  return deletedTeam;
};
// END OF SERVICES

// FUNCTIONS for manipulation of data structures
const updateTimeStats = (team, id) => {
  team.time.time_id = id;
  team.saldo_gols = team.gols_pro - team.gols_contra;
  team.pontos = team.vitorias * 3 + team.empates;
  team.jogos = team.vitorias + team.empates + team.derrotas;
  team.aproveitamento = Number((team.pontos / (team.jogos * 0.03)).toFixed(1));
  team.variacao_posicao = 0;
  team.ultimos_jogos = team.ultimos_jogos || [];
};

const updateTimesPositions = () => {
  const sortedByPoints = timesSortedByPoints();
  times.forEach((team) => {
    team.posicao =
      sortedByPoints.findIndex(
        (s_team) => s_team.time.time_id === team.time.time_id,
      ) + 1;
  });
};

const timesSortedByPoints = () => {
  return times.slice().sort((a, b) => b.pontos - a.pontos);
};

const findFreeId = () => {
  const sortedById = times
    .slice()
    .sort((a, b) => a.time.time_id - b.time.time_id);
  let previousId = 0;

  for (const team of sortedById) {
    if (team.time.time_id !== previousId + 1) {
      return previousId + 1;
    }
    previousId = team.time.time_id;
  }

  return previousId + 1;
};

// EXPORTS
module.exports = {
  findAllTimesService,
  findByIdTimeService,
  findAllTimesByPositionService,
  createTimeService,
  updateTimeService,
  deleteTimeService,
};
