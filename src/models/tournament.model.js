const { Schema, model } = require('mongoose');

const TournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  rounds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Round',
    },
  ],
});

const Table = model('Table', TableSchema);

module.exports = { Table };
