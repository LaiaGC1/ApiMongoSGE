const Categoria = require('../models/categoria.model');

const categoriaCtrl = {};

// Función que devuelve todas las categorias
categoriaCtrl.getCategorias = async (req, res) => {
    const categorias = await Categoria.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};
module.exports = categoriaCtrl;