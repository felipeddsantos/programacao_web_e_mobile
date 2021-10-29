const router = require("express-promise-router")()
const controllerMatricula = require("../controllers/ControllerMatricula")

router.post("/coordenador/:registro/matricula", controllerMatricula.inserirMatriculas)
router.post("/professor/:registro/disciplinas/:codigo/alteracao", controllerMatricula.alterarMatriculas)
router.get("/aluno/:registro/matriculas", controllerMatricula.procurarMatriculasAluno)
router.get("/professor/:registro/disciplinas/:codigo", controllerMatricula.procurarMatriculasProfessor)

module.exports = router
