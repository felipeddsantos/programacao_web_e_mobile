/*

Programação Web e Mobile - Sistema de Matrícula Universitário (Sistema Web)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"
import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavegacaoPrincipal from "./components/navbar/NavegacaoPrincipal"
import NavegacaoAluno from "./components/navbar/NavegacaoAluno"
import NavegacaoProfessor from "./components/navbar/NavegacaoProfessor"
import NavegacaoCoordenador from "./components/navbar/NavegacaoCoordenador"
import Principal from "./components/pages"
import PrincipalAluno from "./components/pages/PrincipalAluno"
import PrincipalProfessor from "./components/pages/PrincipalProfessor"
import PrincipalCoordenador from "./components/pages/PrincipalCoordenador"
import CadastroAluno from "./components/pages/CadastroAluno"
import CadastroProfessor from "./components/pages/CadastroProfessor"
import CadastroCoordenador from "./components/pages/CadastroCoordenador"
import CadastroDisciplina from "./components/pages/CadastroDisciplina"
import LoginAluno from "./components/pages/LoginAluno"
import LoginProfessor from "./components/pages/LoginProfessor"
import LoginCoordenador from "./components/pages/LoginCoordenador"
import DadosAluno from "./components/pages/DadosAluno"
import DadosProfessor from "./components/pages/DadosProfessor"
import DadosCoordenador from "./components/pages/DadosCoordenador"
import DadosDisciplina from "./components/pages/DadosDisciplina"
import MatriculaAluno from "./components/pages/MatriculaAluno"
import MatriculaProfessor from "./components/pages/MatriculaProfessor"
import MatriculaCoordenador from "./components/pages/MatriculaCoordenador"
import DisciplinasAluno from "./components/pages/DisciplinasAluno"
import DisciplinasProfessor from "./components/pages/DisciplinasProfessor"
import DisciplinasCoordenador from "./components/pages/DisciplinasCoordenador"

function App(){

  const usuario = {registro: "!", nome: "@", codigo: "#", curso: "&"}

  return(

    <div className = "App">
      <Router>      
        <Switch>
          <Route path = "/aluno">
            <NavegacaoAluno usuario = {usuario}/> 
          </Route>
          <Route path = "/professor">
            <NavegacaoProfessor usuario = {usuario}/> 
          </Route>
          <Route path = "/coordenador">
            <NavegacaoCoordenador usuario = {usuario}/> 
          </Route>
          <Route path = "/">
            <NavegacaoPrincipal/> 
          </Route>
        </Switch>
        <Switch>
          <Route path = "/cadastro/aluno">
            <CadastroAluno/>
          </Route>
          <Route path = "/cadastro/professor">
            <CadastroProfessor/>
          </Route>
          <Route path = "/cadastro/coordenador">
            <CadastroCoordenador/>
          </Route>
          <Route path = "/coordenador/:registro/cadastro">
            <CadastroDisciplina usuario = {usuario}/>
          </Route>
          <Route path = "/login/aluno">
            <LoginAluno usuario = {usuario}/>
          </Route>
          <Route path = "/login/professor">
            <LoginProfessor usuario = {usuario}/>
          </Route>
          <Route path = "/login/coordenador">
            <LoginCoordenador usuario = {usuario}/>
          </Route>
          <Route path = "/aluno/:registro/dados">
            <DadosAluno usuario = {usuario}/>
          </Route>
          <Route path = "/professor/:registro/dados">
            <DadosProfessor usuario = {usuario}/>
          </Route>
          <Route path = "/coordenador/:registro/dados">
            <DadosCoordenador usuario = {usuario}/>
          </Route>
          <Route path = "/coordenador/:registro/disciplinas/:codigo">
            <DadosDisciplina usuario = {usuario}/>
          </Route>
          <Route path = "/aluno/:registro/matricula">
            <MatriculaAluno usuario = {usuario}/>
          </Route>
          <Route path = "/professor/:registro/disciplinas/:codigo">
            <MatriculaProfessor usuario = {usuario}/>
          </Route>
          <Route path = "/coordenador/:registro/matricula">
            <MatriculaCoordenador usuario = {usuario}/>
          </Route>
          <Route path = "/aluno/:registro/disciplinas">
            <DisciplinasAluno usuario = {usuario}/>
          </Route>
          <Route path = "/professor/:registro/disciplinas">
            <DisciplinasProfessor usuario = {usuario}/>
          </Route>
          <Route path = "/coordenador/:registro/disciplinas">
            <DisciplinasCoordenador usuario = {usuario}/>
          </Route>
          <Route path = "/aluno/:registro">
            <PrincipalAluno usuario = {usuario}/>
          </Route>
          <Route path = "/professor/:registro">
            <PrincipalProfessor usuario = {usuario}/>
          </Route>
          <Route path = "/coordenador/:registro">
            <PrincipalCoordenador usuario = {usuario}/>
          </Route>
          <Route path = "/">
            <Principal usuario = {usuario}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
