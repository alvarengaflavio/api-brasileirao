const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sigla: {type: String, required: true},
    escudo: {type: String, required: true},
    gols_pro: {type: Number, required: true},
    gols_contra: {type: Number, required: true},
    vitorias: {type: Number, required: true},
    empates: {type: Number, required: true},
    derrotas: {type: Number, required: true},

    jogos: {type: Number, required: false},
    pontos: {type: Number, required: false},
    saldo_gols: {type: Number, required: false},
    aproveitamento: {type: Number, required: false},
    variacao_posicao: {type: Number, required: false},
    ultimos_jogos: {type: Array, required: false},
})

const Team = mongoose.model('teams', TeamSchema);

modeula.exports = Team;
