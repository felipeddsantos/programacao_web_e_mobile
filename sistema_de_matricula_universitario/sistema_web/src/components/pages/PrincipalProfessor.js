import React from "react"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import {read_cookie} from "sfcookies"

const PrincipalProfessor = (props) => {

  return(

    <div>
      <br></br>
      <h1>Seja bem vindo ao portal do professor, {read_cookie(props.usuario.nome)}</h1>
      <div
        style = {{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
          height: "40vh"
        }}>
        <CardGroup>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Notas e Faltas</Card.Header>
            <Card.Body>
              <Card.Text>
                Na aba "Notas e Faltas", você pode visualizar e alterar as notas e as faltas dos alunos das 
                disciplinas que você leciona.  
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

export default PrincipalProfessor