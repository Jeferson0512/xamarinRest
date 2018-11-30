var express = require('express'),
    router = express.Router(),
    controllerAlumno = require('../controller/alumnoController');

// Lista todos los usuarios que se pide de MySql
router.get('/usuarios', function (req, res, next) {
    controllerAlumno.listarUsers(req, res);
});
router.post('/usuarios/:nombre', (req, res, next) => {
    controllerAlumno.listarUser(req, res);
});

router.post('/usuarios/nuevo', function (req, res) {
    // const userData = {
    //     nombre: req.body.nombre,
    //     apellidos: req.body.apellidos,
    //     email: req.body.email,
    //     nacimiento: req.body.nacimiento,
    //     username: req.body.username,
    //     password: req.body.password,
    //     direccion: req.body.direccion
    // }
    controllerAlumno.storeUsers(req, res);
});

module.exports = router;