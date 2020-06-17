const { Router } = require('express');
const router = Router();

const dataCtrl = require('../controllers/data');
const response = require('./response');

//  search/precio_max=1000&precio_min=900&habitaciones=3
router.get('/search/:filter', (req, res) => {
    dataCtrl.filter(req.params.filter)
        .then(info => {
            response.success(res, info, 200)
        })
        .catch((e) => {
            response.error(res, e, 400)
        })
});

router.get('/search', (req, res) => {
    dataCtrl.all()
        .then(info => {
            response.success(res, info, 200)
        })
        .catch((e) => {
            response.error(res, e, 400)
        })
});

// precio_promedio_m2/latitud=40.37&longitud=-3.5&distancia=8
router.get('/precio_promedio_m2/:data', (req, res) => {
    dataCtrl.average(req.params.data)
        .then(info => {
            response.success(res, info, 200)
        })
        .catch((e) => {
            response.error(res, e, 400)
        })
});

// 
router.get('/reporte/:data', (req, res) => {
    dataCtrl.report(req.params.data)
        .then(info => {
            response.success(res, info, 200)
        })
        .catch((e) => {
            response.error(res, e, 400)
        })
});

module.exports = router;