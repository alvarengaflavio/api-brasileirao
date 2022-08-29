class Tournament {
  constructor(tournament) {
    this.name = tournament.name;
    this.format = tournament.format;
    this.logo = tournament.image;
    this.description = tournament.description;
    this.startDate = this.getDate(tournament.startDate);
    this.endDate = this.getDate(tournament.endDate);
    this.status = undefined;
    this.createdAt = tournament.createdAt || new Date();
    this.updatedAt = new Date();
    this.setStatus();
  }

  validate() {
    if (!this.name || this.name.length >= 50)
      throw { name: 'ValidationError', message: 'Nome do torneio inválido' };
    if (this.validateFormat())
      throw {
        name: 'ValidationError',
        message:
          'Formato do torneio inválido! Formato aceito: Liga, Copa, Campeonato',
      };
    if (!this.logo || this.logo.length >= 250)
      throw { name: 'ValidationError', message: 'Logo do torneio inválido' };
    if (!this.description || this.description.length >= 250)
      throw {
        name: 'ValidationError',
        message:
          'Descrição do torneio inválida! A descrição deve conter até 250 caracteres.',
      };
    if (!this.startDate)
      throw { name: 'ValidationError', message: 'Data de início inválida' };
    if (!this.endDate)
      throw {
        name: 'ValidationError',
        message: 'Data de finalização inválida',
      };
    if (!this.status)
      throw { name: 'ValidationError', message: 'Status inválido' };
  }

  validateFormat() {
    if (!this.format) return true;
    this.format = this.capitalizeFirstLetter(this.format);
    const validFormats = ['Liga', 'Copa', 'Misto', 'Outro'];
    if (!validFormats.includes(this.format)) return true;
    return false;
  }

  /**
   * @param {String} arg
   * @returns {String}
   */
  capitalizeFirstLetter(arg) {
    return arg[0].toUpperCase() + arg.substring(1);
  }

  setStatus() {
    const date = new Date();
    if (date < this.initialDate) this.status = 'Pendente';
    if (date > this.finalDate) this.status = 'Finalizado';
    this.status = 'Em andamento';
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

  getTournament() {
    this.setStatus();
    return {
      name: this.name,
      format: this.format,
      image: this.logo,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
