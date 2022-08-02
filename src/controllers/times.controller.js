const timesService = require('../services/times.service');

const findAllTimesControler = (req, res) => {
  const allTimes = timesService.findAllTimesService();
  res.send(allTimes);
};

const findByIdTimeController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam)
    return res
      .status(400)
      .send({ message: 'An ID is required for this request.' });

  const chosenTime = timesService.findByIdTimeService(idParam);

  if (!chosenTime) return res.status(400).send({ message: 'ID not found.' });

  res.send(chosenTime);
};

const findByPositionTimeController = (req, res) => {
  const posParam = Number(req.params.pos);

  if (!posParam)
    return res
      .status(400)
      .send({ message: 'A POSITION is required for this request.' });

  const chosenTime = timesService.findByPositionTimeService(posParam);

  if (!chosenTime)
    return res.status(400).send({ message: 'POSITION not found.' });

  res.send(chosenTime);
};

const createTimeController = (req, res) => {};

const updateTimeController = (req, res) => {};

const deleteTimeController = (req, res) => {};

module.exports = {
  findAllTimesControler,
  findByIdTimeController,
  findByPositionTimeController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
