//producto_controller.js
let db = require('../db/dbconexion');
var fecha = new Date("October 13, 2014 11:13:00");
let usuarios = {
    listarUsers(req, res) {
        let sql = "SELECT * FROM usuario";
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        });
    },
    listarUser(req, res) {
        // const {nombre} = req.body;
        const nombre = req.params.nombre;
        let sql = "select * from usuario inner join nota on usuario.idUsuario=nota.idUsuario where nombre=?";
        db.query(sql, [nombre] ,function(err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }else {
                res.json(data);
            }
        });
    },
    storeUsers(req, res) {
        const {nombre, apellidos, email, nacimiento, direccion} = req.body;
        let sql = "INSERT INTO usuario(nombre, apellidos, email, nacimiento, direccion) VALUES(?,?,?,?,?)";
        db.query(sql, [nombre, apellidos, email, nacimiento, direccion], function (err, newData) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(newData);
            }
        });
    },
    editUsers(req, res) {
        const {nombre, apellidos, email, nacimiento, direccion, idUsuario} = req.body;
        let sql = "UPDATE usuario SET nombre=?, apellidos=?, email=?, nacimiento=?, direccion=? WHERE idUsuario=?";
        db.query(sql, [nombre, apellidos, apellidos, email, nacimiento, direccion, idUsuario], function (err, newData) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.json(newData);
            }
        });
    },
    deleteUsers(req, res) {
        val_idUsuario = req.body.idUsuario;
        let sql = "DELETE FROM usuario WHERE idUsario=?";
        db.query(sql, [val_idUsuario], function (err, newData) {
            if (err) {
                console.log(err)
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
module.exports = usuarios;