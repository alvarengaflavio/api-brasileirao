class TeamEntity {
  constructor(team) {
    this.nome = team.nome_popular;
    this.sigla = team.sigla;
    this.escudo = team.escudo;
    this.estadio = team.estadio;
    this.ratings = {
      spi: team.ratings.spi ?? 0,
      off: team.ratings.off ?? 0,
      def: team.ratings.off ?? 0,
    };
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
    this.validateRatings();
  }

  validateRatings() {
    if (
      isNaN(this.ratings.spi) ||
      this.ratings.spi < 0 ||
      this.ratings.spi > 100
    )
      throw {
        name: 'ValidationError',
        message: 'Rating de Spi inválido! Deve estar entre 0 e 100.',
      };
    if (
      isNaN(this.ratings.off) ||
      this.ratings.off < 0 ||
      this.ratings.off > 10
    )
      throw {
        name: 'ValidationError',
        message: 'Rating de Off inválido! Deve estar entre 0 e 10.',
      };
    if (
      isNaN(this.ratings.def) ||
      this.ratings.def < 0 ||
      this.ratings.def > 10
    )
      throw {
        name: 'ValidationError',
        message: 'Rating de Def inválido! Deve estar entre 0 e 10.',
      };
  }

  getTeam() {
    return {
      nome_popular: this.nome,
      sigla: this.sigla,
      escudo: this.escudo,
    };
  }
}

//////////////////////////////////////////////////////////////////////////////
module.exports = { TeamEntity };
