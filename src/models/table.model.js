const { Schema, model } = require('mongoose');

const TableSchema = new Schema({
  posicao: {
    type: Number,
    default: undefined,
    required: false,
  },
  pontos: {
    type: Number,
    default: 0,
    required: false,
  },
  time: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
    unique: true,
  },
  jogos: {
    type: Number,
    default: 0,
    required: false,
  },
  vitorias: {
    type: Number,
    default: 0,
    required: true,
  },
  empates: {
    type: Number,
    default: 0,
    required: true,
  },
  derrotas: {
    type: Number,
    default: 0,
    required: true,
  },
  gols_pro: {
    type: Number,
    default: 0,
    required: true,
  },
  gols_contra: {
    type: Number,
    default: 0,
    required: true,
  },
  saldo_gols: {
    type: Number,
    default: 0,
    required: false,
  },
  aproveitamento: {
    type: Number,
    default: 0,
    required: false,
  },
  variacao_posicao: {
    type: Number,
    default: 0,
    required: false,
  },
  ultimos_jogos: {
    type: Array,
    default: [],
    required: false,
  },
});

const Table = model('Table', TableSchema);

module.exports = { Table };
