const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  posicao: { type: Number, default: undefined, required: false },
  pontos: { type: Number, default: 0, required: false },
  time: {
    nome_popular: { type: String, minLength: 3, maxLength: 16, required: true },
    sigla: {
      type: String,
      minLength: 3,
      maxLength: 3,
      uppercase: true,
      required: true,
    },
    escudo: { type: String, maxLength: 60, required: true },
  },
  jogos: { type: Number, default: 0, required: false },
  vitorias: { type: Number, default: 0, required: true },
  empates: { type: Number, default: 0, required: true },
  derrotas: { type: Number, default: 0, required: true },
  gols_pro: { type: Number, default: 0, required: true },
  gols_contra: { type: Number, default: 0, required: true },
  saldo_gols: { type: Number, default: 0, required: false },
  aproveitamento: { type: Number, default: 0, required: false },
  variacao_posicao: { type: Number, default: 0, required: false },
  ultimos_jogos: { type: Array, default: [], required: false },
});

const Team = model('teams', TeamSchema);

module.exports = Team;
