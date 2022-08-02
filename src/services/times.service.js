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

const createTimeService = (newPaleta) => {};

const updateTimeService = (id, paletaEdited) => {};

const deleteTimeService = (id) => {};

module.exports = {
  findAllTimesService,
  findByIdTimeService,
  findByPositionTimeService,
  createTimeService,
  updateTimeService,
  deleteTimeService,
};
