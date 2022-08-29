const { Schema, model } = require('mongoose');

const LeagueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  edicoes: {
    type: Number,
    default: 0,
    required: true,
  },
  numero_equipes: {
    type: Number,
    required: true,
  },
  sistema: {
    type: String,
    default: 'Pontos corridos',
    required: false,
  },
  times: {
    type: [Schema.Types.ObjectId],
    ref: 'Team',
    required: true,
    unique: true,
  },
  jogos: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Round',
      },
    ],
    default: 0,
    required: false,
  },
});

const Table = model('Table', TableSchema);

module.exports = { Table };
