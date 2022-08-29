const router = require('express').Router();
const tournamentController = require('../controllers/tournament.controller');
const {
  validadeTeamBody,
  validateID,
  validateBodyId,
} = require('../middlewares/table.middleware');

/*    GET_TABELA    */
router.get(
  '/table/:name',
  tournamentController.findAllTeamsByPositionController,
);
/*    CREATE_TABELA    */
router.post(
  '/table/create',
  validateBodyId,
  tournamentController.createTableByIdController,
);
/*    CREATE_TOURNAMENT    */
router.post('/create', tournamentController.createTournamentController);

////////////////////////////////////////////////////////////////////////
module.exports = router;
