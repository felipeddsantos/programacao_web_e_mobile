/*

Programação Web e Mobile - Sistema de Matrícula Universitário (Servidor)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

const express = require("express")
const cors = require("cors")
const app = express()
const index = require("./routes/index")
const routeAluno = require("./routes/RouteAluno")
const routeProfessor = require("./routes/RouteProfessor")
const routeCoordenador = require("./routes/RouteCoordenador")
const routeDisciplina = require("./routes/RouteDisciplina")
const routeRequisicao = require("./routes/RouteRequisicao")
const routeMatricula = require("./routes/RouteMatricula")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: "application/vnd.api+json"}))
app.use(cors())
app.use(index)
app.use("", routeAluno)
app.use("", routeProfessor)
app.use("", routeCoordenador)
app.use("", routeDisciplina)
app.use("", routeRequisicao)
app.use("", routeMatricula)

module.exports = app
