import React from "react"
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

const NavegacaoPrincipal = () => {

    return( 

        <div>
            <Navbar bg = "dark" expand = "lg" variant = "dark">
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "mr-auto">
                        <Nav.Link href = "/">Página Principal</Nav.Link>
                        <NavDropdown title = "Cadastro" id = "basic-nav-dropdown">
                            <NavDropdown.Item href = "/cadastro/aluno">Aluno</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href = "/cadastro/professor">Professor</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href = "/cadastro/coordenador">Coordenador</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "Login" id = "basic-nav-dropdown">
                            <NavDropdown.Item href = "/login/aluno">Aluno</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href = "/login/professor">Professor</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href = "/login/coordenador">Coordenador</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavegacaoPrincipal