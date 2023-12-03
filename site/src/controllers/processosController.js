var processosModel = require("../models/processosModel");

function listarProcessos(req, res) {

    var idEmpresa = req.body.idEmpresaServer;
    var idAndar = req.body.idAndarServer;
    var filtro = req.body.filtroServer;

    processosModel.listarProcessos(idEmpresa, idAndar, filtro)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nSomething is wrong Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listarProcessos
}