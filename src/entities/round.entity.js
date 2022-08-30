class RoundEntity {
  constructor(round) {
    this.tournament = round.tournament;
    this.number = round.number;
    this.startDate = this.getDate(round.startDate); // dd/mm/yyyy
    this.endDate = this.getDate(round.endDate); // dd/mm/yyyy
    this.status = undefined;
    this.matches = [];
    this.setStatus();
  }

  validate() {
    if (
      !this.number ||
      isNaN(this.number) ||
      this.number < 1 ||
      this.number > 38
    )
      throw { name: 'ValidationError', message: 'Número da rodada inválido' };
    if (!this.startDate)
      throw { name: 'ValidationError', message: 'Data inválida' };
    if (!this.endDate)
      throw { name: 'ValidationError', message: 'Data inválida' };
    if (!this.status)
      throw { name: 'ValidationError', message: 'Status inválido' };
    if (!this.tournamentId)
      throw { name: 'ValidationError', message: 'Torneio inválido' };
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

  setStatus() {
    const date = new Date();
    if (date < this.startDate) this.status = 'Pendente';
    if (date > this.endDate) this.status = 'Finalizado';
    this.status = 'Em andamento';
  }

  static validateDate(date) {
    const datePattern =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    return datePattern.test(date);
  }

  addMatch(match) {
    if (this.validateMatch(match))
      throw { name: 'ValidationError', message: 'Jogo já cadastrado' };
    this.matches.push(match);
  }

  addMatches(matches) {
    matches.forEach((match) => this.setMatch(match));
  }

  validateMatch(match) {
    for (const m of this.matches) {
      if (
        m.mandante === match.mandante ||
        m.mandante === match.visitante ||
        m.visitante === match.mandante ||
        m.visitante === match.visitante
      )
        console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }

  getRound() {
    this.setStatus();
    return {
      tournament: this.tournament,
      number: this.number,
      initialDate: this.startDate.toDateString(),
      finalDate: this.endDate.toDateString(),
      status: this.status,
      matches: this.matches,
    };
  }
}

module.exports = { RoundEntity };
