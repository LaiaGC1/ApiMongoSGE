const express = require('express');
const serieCtrl = require('../controllers/serie.controller');
const router = express.Router();
router.get('/', serieCtrl.getSeries);
router.get('/series/:id', serieCtrl.getSerie);
router.put('/:id', serieCtrl.updateSerie);

router.get('/category',serieCtrl.getCategorias);

module.exports = router;