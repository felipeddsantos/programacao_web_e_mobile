const router = require("express-promise-router")()
const controllerDisciplina = require("../controllers/ControllerDisciplina")

router.post("/coordenador/:registro/cadastro", controllerDisciplina.inserirDisciplina)
router.post("/coordenador/:registro/disciplinas/:codigo/alteracao", controllerDisciplina.alterarDisciplina)
router.get("/aluno/:registro/disciplinas", controllerDisciplina.procurarDisciplinasAluno)
router.get("/professor/:registro/disciplinas", controllerDisciplina.procurarDisciplinasProfessor)
router.get("/coordenador/:registro/disciplinas/:codigo", controllerDisciplina.procurarDisciplina)
router.get("/coordenador/:registro/disciplinas", controllerDisciplina.procurarDisciplinasCoordenador)
router.delete("/coordenador/:registro/disciplinas/:codigo/remocao", controllerDisciplina.removerDisciplina)

module.exports = router
