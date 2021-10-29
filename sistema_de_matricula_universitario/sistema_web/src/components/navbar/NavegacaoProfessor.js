import React from "react"
import {read_cookie} from "sfcookies"
import {Navbar, Nav} from "react-bootstrap"

const NavegacaoProfessor = (props) => {

    return( 

        <div>
            <Navbar bg = "dark" expand = "lg" variant = "dark">
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "mr-auto">
                        <Nav.Link href = {"/professor/" + read_cookie(props.usuario.registro)}>Página Principal</Nav.Link>
                        <Nav.Link href = {"/professor/" + read_cookie(props.usuario.registro) + "/disciplinas"}>Notas e Faltas</Nav.Link>
                        <Nav.Link href = {"/professor/" + read_cookie(props.usuario.registro) + "/dados"}>Dados Cadastrais</Nav.Link>
                        <Nav.Link href = "/">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavegacaoProfessor