const times = require('../mocks/times');

const findAllTimesService = () => {
  return times;
};

const findByIdTimeService = (id) => {
  return times.find((time) => time.time.time_id === id);
};

const findByPositionTimeService = (position) => {
  return times.find((time) => time.posicao === position);
};

const createTimeService = (newTime) => {
  const newId = times.length + 1;

  newTime.time.time_id = newId;
  newTime.saldo_gols = newTime.gols_pro - newTime.gols_contra;
  newTime.pontos = newTime.vitorias * 3 + newTime.empates;
  newTime.jogos = newTime.vitorias + newTime.empates + newTime.derrotas;
  newTime.aproveitamento =
    Math.round(newTime.pontos / (newTime.jogos * 0.003)) * 0.1;
  newTime.variacao_posicao = 0;
  newTime.ultimos_jogos = [];
  times.push(newTime);

  timesSortedByPoints();
  updatePositionsValues();

  return newTime;
};

const updateTimeService = (id, timeEdited) => {};

const deleteTimeService = (id) => {};

// FUNCTIONS for manipulation of data structures
const updatePositionsValues = () => {
  times.forEach((time, index) => {
    time.posicao = index + 1;
  });
};

const timesSortedByPoints = () => {
  times.sort((a, b) => b.pontos - a.pontos);
};

// EXPORTS
module.exports = {
  findAllTimesService,
  findByIdTimeService,
  findByPositionTimeService,
  createTimeService,
  updateTimeService,
  deleteTimeService,
};
