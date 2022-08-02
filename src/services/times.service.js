const tabela = require('../mocks/times');
const times = tabela.times;

const findAllTimesService = () => {};

const findByIdTimeService = (id) => {
  return times.find((time) => time.id === id);
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
