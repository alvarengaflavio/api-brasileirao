const { ObjectId } = require('mongoose').Types;

class TableEntity {
  constructor(team) {
    this.team = team.id;
    this.gols_pro = +team.gols_pro;
    this.gols_contra = +team.gols_contra;
    this.vitorias = +team.vitorias;
    this.empates = +team.empates;
    this.derrotas = +team.derrotas;
    this._posicao = undefined;
    this.variacao_posicao = 0;
    this.ultimos_jogos = this.ultimos_jogos || [];
  }

  validade() {
    if (!ObjectId.isValid(this.team))
      throw { name: 'ValidationError', message: 'ID de Time inválido' };

    if (isNaN(this.gols_pro) && this.gols_pro > 255 && this.gols_pro < 0)
      throw { name: 'ValidationError', message: 'Gols pro inválido' };

    if (
      isNaN(this.gols_contra) &&
      this.gols_contra > 255 &&
      this.gols_contra < 0
    )
      throw { name: 'ValidationError', message: 'Gols contra inválido' };

    if (isNaN(this.vitorias) && this.vitorias > 255 && this.vitorias < 0)
      throw { name: 'ValidationError', message: 'Vitórias inválidas' };

    if (isNaN(this.empates) && this.empates > 255 && this.empates < 0)
      throw { name: 'ValidationError', message: 'Empates inválidos' };

    if (isNaN(this.derrotas) && this.derrotas > 255 && this.derrotas < 0)
      throw { name: 'ValidationError', message: 'Derrotas inválidas' };
  }

  /**
   * @param {Number} pos
   */
  set posicao(pos) {
    this._posicao = pos;
  }

  updateTeamStats() {
    this.saldo_gols = this.gols_pro - this.gols_contra;
    this.pontos = this.vitorias * 3 + this.empates;
    this.jogos = this.vitorias + this.empates + this.derrotas;
    this.aproveitamento = Number(
      (this.pontos / (this.jogos * 0.03)).toFixed(1),
    );
    this.variacao_posicao = 0;
    this.ultimos_jogos = this.ultimos_jogos || [];
  }

  static updateTeamsPositions(teams) {
    const sortedByPoints = this.teamsSortedByPoints(teams);
    teams.forEach((team) => {
      team.posicao =
        sortedByPoints.findIndex((s_team) => s_team._id === team._id) + 1;
    });
    return teams;
  }

  static teamsSortedByPoints(teams) {
    return teams.slice().sort((a, b) => b.pontos - a.pontos);
  }

  static teamsSortedById(teams) {
    return teams.slice().sort((a, b) => a.time.time_id - b.time.time_id);
  }

  getTeamTable() {
    return {
      posicao: this._posicao,
      pontos: this.pontos,
      time: this.team,
      jogos: this.jogos,
      vitorias: this.vitorias,
      empates: this.empates,
      derrotas: this.derrotas,
      gols_pro: this.gols_pro,
      gols_contra: this.gols_contra,
      saldo_gols: this.saldo_gols,
      aproveitamento: this.aproveitamento,
      variacao_posicao: this.variacao_posicao,
      ultimos_jogos: this.ultimos_jogos,
    };
  }
}

module.exports = { TableEntity };
