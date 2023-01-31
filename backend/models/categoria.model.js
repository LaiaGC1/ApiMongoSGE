const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriaSchema = new Schema({
    nombre: {type: String, required: true, default: null},
    imagencategoria: {type: String, required: true, default: null}
})
module.exports = mongoose.model('dbseries', categoriaSchema, 'categorias');
