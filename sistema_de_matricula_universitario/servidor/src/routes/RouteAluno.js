const router = require("express-promise-router")()
const controllerAluno = require("../controllers/ControllerAluno")

router.post("/cadastro/aluno", controllerAluno.inserirAluno)
router.post("/login/aluno", controllerAluno.logarAluno)
router.post("/aluno/:registro/alteracao", controllerAluno.alterarAluno)
router.get("/aluno/:registro/dados", controllerAluno.procurarAluno)
router.delete("/aluno/:registro/remocao", controllerAluno.removerAluno)

module.exports = router
