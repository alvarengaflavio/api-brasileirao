const timesService = require('../services/times.service');

/* CONTROLLERS */
/*   GET_ALL   */
const findAllTimesControler = (req, res) => {
  const allTimes = timesService.findAllTimesService();
  res.send(allTimes);
};

/*   GET_BY_ID   */
const findByIdTimeController = (req, res) => {
  try {
    const idParam = Number(req.params.id);
    if (!idParam) throw new Error('ID invalid.');

    const chosenTime = timesService.findByIdTimeService(idParam);
    if (!chosenTime) throw new Error('Team not found.');

    res.send(chosenTime);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

/*   GET_TABELA   */
const findAllTimesByPositionController = (req, res) => {
  try {
    const timesSortedByPosition = timesService.findAllTimesByPositionService();

    res.send(timesSortedByPosition);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

/*   POST_TIME   */
const createTimeController = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error('Team Req Empty.');
    }
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

/*   UPDATE_BY_ID   */
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

/*   DELETE_BY_ID   */
const deleteTimeController = (req, res) => {
  try {
    const idParam = Number(req.params.id);
    if (!idParam || isNaN(idParam)) throw new Error('ID required.');

    const deletedTime = timesService.deleteTimeService(idParam);

    res.send(deletedTime);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

/*   END OF CONTROLLERS   */

module.exports = {
  findAllTimesControler,
  findByIdTimeController,
  findAllTimesByPositionController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
