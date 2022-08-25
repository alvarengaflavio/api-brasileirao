class TeamEntity {
  constructor(team) {
    this.nome = team.time.nome_popular;
    this.sigla = team.time.sigla;
    this.escudo = team.time.escudo;
  }

  validateTeamTable() {
    if (!this.nome || this.nome.length >= 12)
      throw { name: 'ValidationError', message: 'Nome de Time inválido' };

    if (!this.sigla || this.sigla.length !== 3)
      throw {
        name: 'ValidationError',
        message: 'Sigla de Time inválida! A sigal deve conter três caracteres.',
      };

    if (!this.escudo || this.sigla.length > 50)
      throw { name: 'ValidationError', message: 'Escudo de Time inválido' };
  }

  getTeam() {
    return {
      nome_popular: this.nome,
      sigla: this.sigla,
      escudo: this.escudo,
    };
  }
}

module.exports = { TeamEntity };
