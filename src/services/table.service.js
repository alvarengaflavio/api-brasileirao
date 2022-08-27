const { TableEntity } = require('../entities/table.entity');
const { Table } = require('../models/table.model');

/*   GET_TABELA   */
const findAllTeamsByPositionService = async () => {
  const allTeams = await Table.find().populate({
    path: 'time',
    select: 'nome_popular sigla escudo',
  });
  const allTeamsTable = TableEntity.teamsSortedByPoints(allTeams);
  return allTeamsTable;
};

const createTableByIdService = async (team) => {
  const newTable = TableEntity.getNewTable(team.id);
  const teamTable = await Table.create(newTable);
  return teamTable;
};

/////////////////////////////////////////////////////////////////////////////////////////////
/*   SERVICES Intern Functions    */
const updateDataBasePositions = async () => {
  const sortedTeams = TableEntity.updateTeamsPositions(await Team.find());
  for (const team of sortedTeams) {
    await Table.findByIdAndUpdate(team._id.valueOf(), {
      posicao: team.posicao,
    });
  }
};

module.exports = {
  findAllTeamsByPositionService,
  createTableByIdService,
};
