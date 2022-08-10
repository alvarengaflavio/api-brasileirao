const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  posicao: { type: Number, required: false, default: undefined },
  pontos: { type: Number, required: false },
  time: {
    nome_popular: { type: String, required: true, minLength: 4, maxLength: 15 },
    sigla: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 3,
      uppercase: true,
    },
    escudo: { type: String, required: true },
  },
  jogos: { type: Number, required: false },
  vitorias: { type: Number, required: true },
  empates: { type: Number, required: true },
  derrotas: { type: Number, required: true },
  gols_pro: { type: Number, required: true },
  gols_contra: { type: Number, required: true },
  saldo_gols: { type: Number, required: false },
  aproveitamento: { type: Number, required: false },
  variacao_posicao: { type: Number, required: false },
  ultimos_jogos: { type: Array, required: false, default: [] },
});

const Team = mongoose.model('teams', TeamSchema);

module.exports = Team;
