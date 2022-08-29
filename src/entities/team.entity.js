class TeamEntity {
  constructor(team) {
    this.nome = team.nome_popular;
    this.sigla = team.sigla;
    this.escudo = team.escudo;
    this.estadio = team.estadio;
  }

  validateTeam() {
    if (!this.nome || this.nome.length >= 20)
      throw { name: 'ValidationError', message: 'Nome de Time inválido' };

    if (!this.sigla || this.sigla.length !== 3)
      throw {
        name: 'ValidationError',
        message: 'Sigla de Time inválida! A sigal deve conter três caracteres.',
      };
    if (!this.escudo || this.sigla.length > 250)
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
