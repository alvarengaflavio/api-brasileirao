class TeamEntity {
  constructor(team) {
    this.id = team.time.time_id;
    this.nome = team.time.nome_popular;
    this.sigla = team.time.sigla;
    this.escudo = team.time.escudo;
    this.gols_pro = team.gols_pro;
    this.gols_contra = team.gols_contra;
    this.vitorias = team.vitorias;
    this.empates = team.empates;
    this.derrotas = team.derrotas;
    this.posicao = null;
  }

  validate() {
    if (!this.id) {
      throw new Error('Id inválida');
    }
    if (!this.nome) {
      throw new Error('Nome de time inválido');
    }
    if (!this.sigla) {
      throw new Error('Sigla inválida');
    }
    if (!this.escudo) {
      throw new Error('Escudo inválido');
    }
    if (isNaN(this.gols_pro)) {
      throw new Error('Número de Gols Pro inválido');
    }
    if (isNaN(this.gols_contra)) {
      throw new Error('Número de Gols Contra inválido');
    }
    if (isNaN(this.vitorias)) {
      throw new Error('Número de vitórias inválido');
    }
    if (isNaN(this.empates)) {
      throw new Error('Número de empates inválido');
    }
    if (isNaN(this.derrotas)) {
      throw new Error('Número de derrotas inválido');
    }
  }

  updateTeam() {
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
      posicao: this.posicao,
      pontos: this.pontos,
      time: {
        time_id: this.id,
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

  static findFreeId(teams) {
    const sortedById = teams
      .slice()
      .sort((a, b) => a.time.time_id - b.time.time_id);
    let previousId = 0;

    for (const team of sortedById) {
      if (team.time.time_id !== previousId + 1) {
        return previousId + 1;
      }
      previousId = team.time.time_id;
    }

    return previousId + 1;
  }
}

module.exports = TeamEntity;
