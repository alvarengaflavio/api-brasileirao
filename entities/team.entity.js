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
    if (!this.gols_pro && this.gols_pro !== 0) {
      throw new Error('Número de Gols Pro inválido');
    }
    if (!this.gols_contra && this.gols_contra !== 0) {
      throw new Error('Número de Gols Contra inválido');
    }
    if (!this.vitorias && this.vitorias !== 0) {
      throw new Error('Número de vitórias inválido');
    }
    if (!this.empates && this.empates !== 0) {
      throw new Error('Número de empates inválido');
    }
    if (!this.derrotas && this.derrotas !== 0) {
      throw new Error('Número de derrotas inválido');
    }
  }

  updateTime(id = this.id) {
    this.id = id;
    this.saldo_gols = this.gols_pro - this.gols_contra;
    this.pontos = this.vitorias * 3 + this.empates;
    this.jogos = this.vitorias + this.empates + this.derrotas;
    this.aproveitamento = Number(
      (this.pontos / (this.jogos * 0.03)).toFixed(1),
    );
    this.variacao_posicao = 0;
    this.ultimos_jogos = this.ultimos_jogos || [];
  }

  getTime() {
    return {
      posicao: null,
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
}

module.exports = TeamEntity;
