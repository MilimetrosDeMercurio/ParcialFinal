const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnimalF = new Schema({
    nombre: String,
    clasificacion: String,
    apariencia: String,
    poder: Number,
    ubicacion: String
});

module.exports = mongoose.model('animal'.AnimalF);
