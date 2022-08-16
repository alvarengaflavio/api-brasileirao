const timesService = require('../services/times.service');
const TeamEntity = require('../entities/team.entity');

/* CONTROLLERS */
/*   GET_ALL   */
const findAllTimesControler = async (req, res) => {
  try {
    const allTimes = await timesService.findAllTimesService();
    res.send(allTimes);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

/*   GET_BY_ID   */
const findByIdTimeController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const chosenTime = await timesService.findByIdTimeService(idParam);
    res.send(chosenTime);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

/*   GET_TABELA   */
const findAllTimesByPositionController = async (req, res) => {
  try {
    const timesSortedByPosition =
      await timesService.findAllTimesByPositionService();
    res.send(timesSortedByPosition);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

/*   POST_TIME   */
const createTimeController = async (req, res) => {
  try {
    const time = new TeamEntity(req.body);
    const newTime = await timesService.createTimeService(time);
    res.status(201).send(newTime);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

/*   UPDATE_BY_ID   */
const updateTimeController = async (req, res) => {
  try {
    const editedTime = req.body;
    const idParam = req.params.id;
    const editedEntity = new TeamEntity(editedTime);
    const updatedTime = await timesService.updateTimeService(
      idParam,
      editedEntity,
    );
    res.send(updatedTime);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

/*   DELETE_BY_ID   */
const deleteTimeController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const deletedTime = await timesService.deleteTimeService(idParam);
    res.send({ message: 'Team successfully deleted!', team: deletedTime });
  } catch (err) {
    return res.status(400).send({ message: err.message });
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
