const timesService = require('../services/times.service');

const findAllTimesControler = (req, res) => {
  const allTimes = timesService.findAllTimesService();
  res.send(allTimes);
};

const findByIdTimeController = (req, res) => {
  const idParam = req.params.id;
  const chosenTime = timesService.findByIdTimeService(idParam);
  res.send(chosenTime);
};

const createTimeController = (req, res) => {};

const updateTimeController = (req, res) => {};

const deleteTimeController = (req, res) => {};

module.exports = {
  findAllTimesControler,
  findByIdTimeController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
