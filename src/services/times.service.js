const times = require('../mocks/times');

const findAllTimesService = () => {
  return times;
};

const findByIdTimeService = (id) => {
  return times.find((time) => time.time.time_id === id);
};

const createTimeService = (newPaleta) => {};

const updateTimeService = (id, paletaEdited) => {};

const deleteTimeService = (id) => {};

module.exports = {
  findAllTimesService,
  findByIdTimeService,
  createTimeService,
  updateTimeService,
  deleteTimeService,
};
