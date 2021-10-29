import React from "react"
import {read_cookie} from "sfcookies"
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

const NavegacaoCoordenador = (props) => {

    return( 

        <div>
            <Navbar bg = "dark" expand = "lg" variant = "dark">
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "mr-auto">
                        <Nav.Link href = {"/coordenador/" + read_cookie(props.usuario.registro)}>Página Principal</Nav.Link>
                        <NavDropdown title = "Disciplinas" id = "basic-nav-dropdown">
                            <NavDropdown.Item href = {"/coordenador/" + read_cookie(props.usuario.registro) + "/cadastro"}>Cadastro</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href = {"/coordenador/" + read_cookie(props.usuario.registro) + "/disciplinas"}>Alterações</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href = {"/coordenador/" + read_cookie(props.usuario.registro) + "/matricula"}>Requisições de Matrícula</Nav.Link>
                        <Nav.Link href = {"/coordenador/" + read_cookie(props.usuario.registro) + "/dados"}>Dados Cadastrais</Nav.Link>
                        <Nav.Link href = "/">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavegacaoCoordenador