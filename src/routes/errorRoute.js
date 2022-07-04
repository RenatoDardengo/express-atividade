const express = require("express");
const router = express.Router(); /* atribui configuração de roteamento a variável */
const erroController = require ("../controllers/errorController")

router.get("/", erroController.index)

module.exports = router;