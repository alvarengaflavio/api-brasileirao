class MatchEntity {
  constructor(game) {
    this.home = game.mandante;
    this.away = game.visitante;
    this.date = this.getDate(game.data); // dd/mm/yyyy
    this.hour = game.hora;
    this.stadium = game.estadio;
    this.home_score = +game.gols_mandante;
    this.away_score = +game.gols_visitante;
    this.home_penalties = game.penaltis_mandante ?? null;
    this.away_penalties = game.penaltis_visitante ?? null;
    this.home_yellow_cards = game.cartoes_amarelos_mandante ?? 0;
    this.away_yellow_cards = game.cartoes_amarelos_visitante ?? 0;
    this.home_red_cards = game.cartoes_vermelhos_mandante ?? 0;
    this.away_red_cards = game.cartoes_vermelhos_visitante ?? 0;
  }

  getDate(date) {
    try {
      const dateparts = date.split('/');
      // mounth is 0 based, so subtract 1
      const dateObject = new Date(dateparts[2], dateparts[1] - 1, dateparts[0]);
      return dateObject;
    } catch (err) {
      throw { name: 'ValidationError', message: 'Data inválida no getDate' };
    }
  }

  validate() {
    if (!this.home || this.home.length !== 3)
      throw {
        name: 'ValidationError',
        message: 'Sigla de Time mandante inválido',
      };
    if (!this.away || this.away.length !== 3)
      throw {
        name: 'ValidationError',
        message: 'Sigla de Time visitante inválido',
      };
    if (!this.date) throw { name: 'ValidationError', message: 'Data inválida' };
    if (!this.hour) throw { name: 'ValidationError', message: 'Hora inválida' };
    if (!this.stadium || this.stadium.length >= 20)
      throw { name: 'ValidationError', message: 'Estádio inválido' };
    if (this.validadeNumericalArg(this.home_score))
      throw {
        name: 'ValidationError',
        message: 'Gols do time mandante inválido',
      };
    if (this.validadeNumericalArg(this.away_score))
      throw {
        name: 'ValidationError',
        message: 'Gols do time visitante inválido',
      };
    if (this.validadeOptionalArg(this.home_penalties))
      throw {
        name: 'ValidationError',
        message: 'Penaltis do time mandante inválido',
      };
    if (this.validadeOptionalArg(this.away_penalties))
      throw {
        name: 'ValidationError',
        message: 'Penaltis do time visitante inválido',
      };
    if (this.validadeOptionalArg(this.home_yellow_cards))
      throw {
        name: 'ValidationError',
        message: 'Cartões amarelos do time mandante inválido',
      };
    if (this.validadeOptionalArg(this.away_yellow_cards))
      throw {
        name: 'ValidationError',
        message: 'Cartões amarelos do time visitante inválido',
      };
    if (this.validadeOptionalArg(this.home_red_cards))
      throw {
        name: 'ValidationError',
        message: 'Cartões vermelhos do time mandante inválido',
      };
    if (this.validadeOptionalArg(this.away_red_cards))
      throw {
        name: 'ValidationError',
        message: 'Cartões vermelhos do time visitante inválido',
      };
  }

  validadeNumericalArg(arg) {
    return arg < 0 || arg > 50 || isNaN(arg) || +arg === undefined;
  }

  validadeOptionalArg(arg) {
    if (arg === null || arg === 0) return false;
    return arg < 0 || arg > 50 || isNaN(arg) || +arg === undefined || !+arg;
  }

  getMatch() {
    return {
      mandante: this.home,
      visitante: this.away,
      data: this.date.toDateString(),
      hora: this.hour,
      estadio: this.stadium,
      gols_mandante: this.home_score,
      gols_visitante: this.away_score,
      penaltis_mandante: this.home_penalties,
      penaltis_visitante: this.away_penalties,
      cartoes_amarelos_mandante: this.home_yellow_cards,
      cartoes_amarelos_visitante: this.away_yellow_cards,
      cartoes_vermelhos_mandante: this.home_red_cards,
      cartoes_vermelhos_visitante: this.away_red_cards,
    };
  }
}

module.exports = { MatchEntity };
