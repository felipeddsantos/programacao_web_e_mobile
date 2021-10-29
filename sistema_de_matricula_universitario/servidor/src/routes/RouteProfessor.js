const router = require("express-promise-router")()
const controllerProfessor = require("../controllers/ControllerProfessor")

router.post("/cadastro/professor", controllerProfessor.inserirProfessor)
router.post("/login/professor", controllerProfessor.logarProfessor)
router.post("/professor/:registro/alteracao", controllerProfessor.alterarProfessor)
router.get("/professor/:registro/dados", controllerProfessor.procurarProfessor)
router.delete("/professor/:registro/remocao", controllerProfessor.removerProfessor)

module.exports = router
