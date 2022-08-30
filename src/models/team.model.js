const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  nome_popular: {
    type: String,
    minLength: 3,
    maxLength: 25,
    required: true,
    unique: true,
  },
  sigla: {
    type: String,
    minLength: 3,
    maxLength: 3,
    uppercase: true,
    required: true,
    unique: true,
  },
  escudo: {
    type: String,
    maxLength: 250,
    required: true,
  },
  ratings: {
    spi: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    off: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    def: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
  },
});

const Team = model('Team', TeamSchema);

module.exports = Team;
