const { Schema, model } = require('mongoose');

const RoundSchema = new Schema({
  tournament: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  matches: [
    {
      type: Object,
      required: false,
      unique: true,
    },
  ],
});

const Round = model('Rounds', RoundSchema);

module.exports = { Round };
