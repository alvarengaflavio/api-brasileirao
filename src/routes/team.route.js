const router = require('express').Router();
const teamsController = require('../controllers/teams.controller');
const {
  validateID,
  validateBodyObject,
  validadeTeamBody,
} = require('../middlewares/team.middleware');

/*    GET_ALL       */
router.get('/find', teamsController.findAllTeamsControler);
/*    GET_BY_ID     */
router.get('/find/:id', validateID, teamsController.findTeamByIdController);

/*    POST_TIME     */
router.post('/create', validadeTeamBody, teamsController.createTeamController);
/*    UPDATE_BY_ID  */
router.put(
  '/update/:id',
  validadeTeamBody,
  validateID,
  teamsController.updateTeamController,
);
/*    DELETE_BY_ID  */
router.delete('/delete/:id', validateID, teamsController.deleteTeamController);

module.exports = router;
