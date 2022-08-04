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

const findAllTimesByPositionController = (req, res) => {
  const findTimePositionsService = timesService.findAllTimesByPositionService();

  res.send(findTimePositionsService);
};

const createTimeController = (req, res) => {
  try {
    const time = new timesService.TeamEntity(req.body);
    time.validateTeam();
    const newTime = timesService.createTimeService(time);
    res.send(newTime);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

const updateTimeController = (req, res) => {
  try {
    const editedTime = req.body;
    const editedId = Number(req.params.id);
    if (!editedId || isNaN(editedId))
      throw new Error('An ID is required for this request.');
    editedTime.time.time_id = editedId;
    const editedEntity = new timesService.TeamEntity(editedTime);
    editedEntity.validateTeam();
    const updatedTime = timesService.updateTimeService(editedEntity);

    res.send(updatedTime);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

const deleteTimeController = (req, res) => {
  try {
    const idParam = Number(req.params.id);
    if (!idParam || isNaN(idParam))
      throw new Error('An ID is required for this request.');

    const deletedTime = timesService.deleteTimeService(idParam);

    res.send(deletedTime);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};
// END OF CONTROLLERS

module.exports = {
  findAllTimesControler,
  findByIdTimeController,
  findAllTimesByPositionController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
