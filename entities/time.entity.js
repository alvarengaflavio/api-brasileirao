class TeamEntity {
  constructor(team) {
    this.id = team.time.time_id;
    this.name = team.time.nome_popular;
    this.initials = team.time.sigla;
    this.badge = team.time.escudo;
  }

  validate() {
    if (!this.id) {
      throw new Error('Invalid team id');
    }
    if (!this.name) {
      throw new Error('Invalid team name');
    }
    if (!this.initials) {
      throw new Error('Invalid team initials');
    }
    if (!this.badge) {
      throw new Error('Invalid team badge');
    }
  }
}
