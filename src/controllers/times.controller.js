const timesService = require('../services/times.service');

const findAllTimesService = (req, res) => {
  const allTimes = timesService.findAllTimesService();
  res.send(allTimes);
};

const findByIdTimeController = (req, res) => {};

const createTimeController = (req, res) => {};

const updateTimeController = (req, res) => {};

const deleteTimeController = (req, res) => {};

module.exports = {
  findAllTimesService,
  findByIdTimeController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
