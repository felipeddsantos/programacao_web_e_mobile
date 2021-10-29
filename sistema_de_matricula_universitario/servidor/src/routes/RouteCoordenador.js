const router = require("express-promise-router")()
const controllerCoordenador = require("../controllers/ControllerCoordenador")

router.post("/cadastro/coordenador", controllerCoordenador.inserirCoordenador)
router.post("/login/coordenador", controllerCoordenador.logarCoordenador)
router.post("/coordenador/:registro/alteracao", controllerCoordenador.alterarCoordenador)
router.get("/coordenador/:registro/dados", controllerCoordenador.procurarCoordenador)
router.delete("/coordenador/:registro/remocao", controllerCoordenador.removerCoordenador)

module.exports = router
