const { ObjEntity } = require('../entities/obj.entity');
const { TeamEntity } = require('../entities/team.entity');
const { ErrorHandler } = require('./errorhandler/error.handler');

const validateID = async (req, res, next) => {
  try {
    const idParam = req.params.id;
    ObjEntity.validadeId(idParam);
    next();
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

const validadeTeamBody = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body) throw { name: 'BadRequestError', message: 'Body is required!' };
    const team = new TeamEntity(body);
    team.validateTeam();
    req.body = team.getTeam();
    next();
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

const validateBodyObject = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body) throw { name: 'BadRequestError', message: 'Body is required!' };
    ObjEntity.validadeObject(body);
    TeamEntity.validateTeamJson(body);
    next();
  } catch (err) {
    ErrorHandler.handleError(err, req, res);
  }
};

module.exports = {
  validateID,
  validadeTeamBody,
  validateBodyObject,
};
