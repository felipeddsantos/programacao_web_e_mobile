import React from "react"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import {read_cookie} from "sfcookies"

const PrincipalAluno = (props) => {

  return(
  
    <div>
      <br></br>
      <h1>Seja bem vindo ao portal do aluno, {read_cookie(props.usuario.nome)}</h1>
      <div
        style = {{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
          height: "50vh"
        }}>
        <CardGroup>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Matrícula</Card.Header>
            <Card.Body>
              <Card.Text>
                Na aba "Matrícula", você pode requisitar matrícula em todas as disciplinas que estejam
                registradas no sistema nas quais você ainda não esteja matriculado.  
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Notas e Faltas</Card.Header>
            <Card.Body>
              <Card.Text>
                Na aba "Notas e Faltas", você pode visualizar as notas e as faltas das disciplinas nas quais 
                você esteja matriculado.  
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Dados Cadastrais</Card.Header>
            <Card.Body>
              <Card.Text>
                Na aba "Dados Cadastrais", você pode visualizar e alterar seus dados cadastrais e remover 
                seu registro.  
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  )
}

export default PrincipalAluno