//producto_controller.js
let db = require('../db/dbconexion');
let notas = {
    
    listarNota(req, res){
        let sql = "SELECT * FROM nota";
        db.query(sql, function (err, notas) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(notas);
            }
        });
    }
}
module.exports = notas;