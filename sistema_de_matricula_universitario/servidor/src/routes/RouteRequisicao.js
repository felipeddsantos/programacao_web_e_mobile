const router = require("express-promise-router")()
const controllerRequisicao = require("../controllers/ControllerRequisicao")

router.post("/aluno/:registro/requisicao", controllerRequisicao.inserirRequisicao)
router.get("/coordenador/:registro/requisicoes", controllerRequisicao.procurarRequisicoes)
router.post("/coordenador/:registro/delrequisicoes", controllerRequisicao.removerRequisicoes)

module.exports = router
