const ObjEntity = require('../entities/obj.entity');
const TeamEntity = require('../entities/team.entity');


const validateID = async (req, res, next) => {
  try {
    const idParam = req.params.id;
    ObjEntity.validadeId(idParam);
    next();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const validateBodyObject = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body) {
      throw new Error('Body is required!');
    }
    ObjEntity.validadeObject(body);
    TeamEntity.validateTeamJson(body);

    next();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { validateID, validateBodyObject };
