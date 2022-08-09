class TeamEntity {
  constructor(team) {
    this.id = team._id;
    this.nome = team.time.nome_popular;
    this.sigla = team.time.sigla;
    this.escudo = team.time.escudo;
    this.gols_pro = +team.gols_pro;
    this.gols_contra = +team.gols_contra;
    this.vitorias = +team.vitorias;
    this.empates = +team.empates;
    this.derrotas = +team.derrotas;
    this._posicao = null;
  }

  validateTeam() {
    // if (!this.id) {
    //   throw new Error('Id inválida');
    // }
    if (!this.nome || this.nome.length >= 12) {
      throw new Error('Nome de Time inválido.');
    }
    if (!this.sigla || this.sigla.length !== 3) {
      throw new Error('Sigla inválida! A sigal deve conter três caracteres.');
    }
    if (!this.escudo || this.sigla.length > 50) {
      throw new Error('Escudo inválido.');
    }
    if (isNaN(this.gols_pro) && this.gols_pro > 255 && this.gols_pro < 0) {
      throw new Error('Número de Gols Pro inválido.');
    }
    if (
      isNaN(this.gols_contra) &&
      this.gols_contra > 255 &&
      this.gols_contra < 0
    ) {
      throw new Error('Número de Gols Contra inválido.');
    }
    if (isNaN(this.vitorias) && this.vitorias > 255 && this.vitorias < 0) {
      throw new Error('Número de vitórias inválido.');
    }
    if (isNaN(this.empates) && this.empates > 255 && this.empates < 0) {
      throw new Error('Número de empates inválido.');
    }
    if (isNaN(this.derrotas) && this.derrotas > 255 && this.derrotas < 0) {
      throw new Error('Número de derrotas inválido.');
    }
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

  getTeam() {
    return {
      _id: this.id,
      posicao: this._posicao,
      pontos: this.pontos,
      time: {
        nome_popular: this.nome,
        sigla: this.sigla,
        escudo: this.escudo,
      },
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

  static updateTeamsPositions(teams) {
    const sortedByPoints = this.teamsSortedByPoints(teams);
    teams.forEach((team) => {
      team.posicao =
        sortedByPoints.findIndex(
          (s_team) => s_team.time.time_id === team.time.time_id,
        ) + 1;
    });
  }

  static teamsSortedByPoints(teams) {
    return teams.slice().sort((a, b) => b.pontos - a.pontos);
  }

  static teamsSortedById(teams) {
    return teams.slice().sort((a, b) => a.time.time_id - b.time.time_id);
  }

  static findFreeId(teams) {
    const sortedById = this.teamsSortedById(teams);
    let previousId = 0;

    for (const team of sortedById) {
      if (team.time.time_id !== previousId + 1) {
        return previousId + 1;
      }
      previousId = team.time.time_id;
    }

    // console.log(previousId + 1);
    return previousId + 1;
  }
}

module.exports = TeamEntity;
