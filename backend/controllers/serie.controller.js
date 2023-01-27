const Serie = require('../models/serie.model');

const serieCtrl = {};

// Función que devuelve todas las películas
serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve una película dada un id
serieCtrl.getSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Serie no existe'})
        })
        .catch(err => console.log(err));
}

// Función para actualizar una serie con el id y la serie con
// los nuevos datos
serieCtrl.updateSerie = async (req, res) => {
    const serie = req.body;
    await Serie.findByIdAndUpdate(
        req.params.id,
        {$set: serie},
        {new: true})
        .then((data) =>
        {
            if(data!=null) res.json({status: 'Serie Successfully Actualizada corrctamente',data})

                else res.json({status: 'Serie no existe'})
            })
                .catch(err => res.send(err.message));
        }

// Función para obtener los diferentes géneros de la DB
serieCtrl.getCategorias = async (req,res) => {
    await Serie.find().distinct('category')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

module.exports = serieCtrl;

