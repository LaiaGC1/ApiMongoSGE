const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    sinopsis: {type: String, required: true},
    imagenes: [{type: String, required: true}],
    chapters: {type: Number, required: true},
    category: [{
        nombre: {type: String, required: true, default: null},
        imagencategoria: {type: String, required: true, default: null}
    }],
    puntuations:[{
        email: {type: String, required: true},
        puntuationuser: {type: Number, required: true},
    }]
    ,
});

module.exports = mongoose.model('Serie', serieSchema, 'series');