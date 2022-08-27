const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  nome_popular: {
    type: String,
    minLength: 3,
    maxLength: 16,
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
});

const Team = model('teams', TeamSchema);

module.exports = Team;
