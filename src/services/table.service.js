const { TableEntity } = require('../entities/table.entity');
const { Table } = require('../models/table.model');

/*   GET_TABELA   */
const findAllTeamsByPositionService = async () => {
  const allTeams = await Table.find();
  const allTeamsTable = TableEntity.teamsSortedByPoints(allTeams);
  return allTeamsTable;
};

/////////////////////////////////////////////////////////////////////////////////////////////
/*   SERVICES Intern Functions    */
const updateDataBasePositions = async () => {
  const sortedTeams = TableEntity.updateTeamsPositions(await Team.find());
  for (const team of sortedTeams) {
    await Table.findByIdAndUpdate(team._id.valueOf(), { posicao: team.posicao });
  }
};
