import React from "react"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import {read_cookie} from "sfcookies"

const PrincipalCoordenador = (props) => {

  return(

    <div>
      <br></br>
      <h1>Seja bem vindo ao portal do coordenador, {read_cookie(props.usuario.nome)}</h1>
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
            <Card.Header>Disciplinas</Card.Header>
            <Card.Body>
              <Card.Text>
                Na aba "Disciplinas", você pode cadastrar novas disciplinas ofertadas pelo seu curso e 
                alterar os dados cadastrais ou remover as disciplinas ofertadas pelo seu curso e que já 
                estejam registradas no sistema.  
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg = {"Light".toLowerCase()}
            text = {"Light".toLowerCase() === "light" ? "dark" : "white"}
            style = {{width: "25rem"}}
            className = "mb-2">
            <Card.Header>Requisições de Matrícula</Card.Header>
            <Card.Body>
              <Card.Text>
                Na aba "Requisições de Matrícula", você pode visualizar e aceitar ou recusar as requisições 
                de matrícula realizadas pelos alunos referentes as disciplinas ofertadas pelo seu curso.  
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

export default PrincipalCoordenador