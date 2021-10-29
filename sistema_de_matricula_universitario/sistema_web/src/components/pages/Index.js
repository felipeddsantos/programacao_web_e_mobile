import React from "react"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import {bake_cookie} from "sfcookies"

const Principal = (props) => {

  bake_cookie(props.usuario.registro, "!")
  bake_cookie(props.usuario.nome, "@")
  bake_cookie(props.usuario.codigo, "#")
  bake_cookie(props.usuario.curso, "$")
    
  return(
    
    <div>
      <br></br>
      <h1>Sistema Web de Matrícula Universitário</h1>
      <div
        style = {{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
          height: "60vh"
          }}>
        <CardGroup>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Descrição</Card.Header>
            <Card.Body>
              <Card.Text>
                O sistema web de matrícula universitário visa proporcionar uma plataforma de comunicação 
                entre alunos, professores e coordenadores em um ambiente acadêmico. Os alunos cadastrados 
                podem se matricular em disciplinas disponíveis no sistema e ter acesso as suas notas e 
                faltas, controladas pelos professores a coordenadores. Para ter acesso ao sistema, utilize 
                a barra de navegação acima para realizar o cadastro e o login.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Objetivos</Card.Header>
            <Card.Body>
              <Card.Text>
                O sistema foi desenvolvido para fins exclusivamente acadêmicos, utilizado como projeto final 
                da disciplina Programação Web e Mobile do curso de graduação em Engenharia de Computação.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Desenvolvimento</Card.Header>
            <Card.Body>
              <Card.Text>
                Sistema desenvolvido por Felipe Daniel Dias dos Santos, aluno de graduação em Engenharia de 
                Computação da Faculdade de Engenharia Elétrica, Universidade Federal de Uberlândia. Código 
                fonte disponível em: https://github.com/felipeddsantos/TWM/sistema_matricula
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  )
}

export default Principal