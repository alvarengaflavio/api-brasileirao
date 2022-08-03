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
  const time = req.body;
  if (
    !time ||
    !time.time ||
    !time.time.nome_popular ||
    !time.time.sigla ||
    !time.time.escudo ||
    !time.vitorias ||
    !time.empates ||
    !time.derrotas ||
    !time.gols_pro ||
    !time.gols_contra
  )
    return res.status(400).send({
      message: "You didin't fill all the required data fields",
    });

  const newTime = timesService.createTimeService(time);
  res.send(newTime);
};

const updateTimeController = (req, res) => {
  const editedId = Number(req.params.id);

  if (!editedId)
    return res
      .status(400)
      .send({ message: 'An ID is required for this request.' });

  const editedTime = req.body;

  if (
    !editedTime ||
    !editedTime.time ||
    !editedTime.time.nome_popular ||
    !editedTime.time.sigla ||
    !editedTime.time.escudo ||
    !editedTime.vitorias ||
    !editedTime.empates ||
    !editedTime.derrotas ||
    !editedTime.gols_pro ||
    !editedTime.gols_contra
  )
    return res.status(400).send({
      message: "You didin't fill all the required data fields",
    });

  const updatedTime = timesService.updateTimeService(editedId, editedTime);
  res.send(updatedTime);
};

const deleteTimeController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam)
    return res
      .status(400)
      .send({ message: 'An ID is required for this request.' });

  const deletedTime = timesService.deleteTimeService(idParam);
  res.send(deletedTime);
};

module.exports = {
  findAllTimesControler,
  findByIdTimeController,
  findAllTimesByPositionController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
