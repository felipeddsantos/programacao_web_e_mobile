import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from "react"
import {Form, Container, Col, Button} from "react-bootstrap"
import {bake_cookie, read_cookie} from "sfcookies"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

function LoginAluno(props){

    const [registro, setRegistro] = useState("")
    const [senha, setSenha] = useState("")
    const [login, setLogin] = useState(false)
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    
    const handleRegistro = (e) => setRegistro(e.target.value)
    const handleSenha = (e) => setSenha(e.target.value)

    useEffect(() => {

        return () => {

            console.log("Dentro da página de login do aluno")
        }
    }, [mostrarMensagem])    

    const logarAluno = () => {

        let alunoInserido = {               
            
            registro: registro,
            senha: senha
        }

        console.log(alunoInserido)

        axios.post("http://localhost:8000/login/aluno", alunoInserido, axiosConfig)
        
            .then((res) => {

                console.log("Resposta recebida: ", res);                                
                setRegistro("")
                setSenha("")

                if(res.data.length > 0){

                    bake_cookie(props.usuario.registro, res.data[0].registro)
                    bake_cookie(props.usuario.nome, res.data[0].nome)
                    setLogin(true)
                }
                
                else{

                    setMensagem("Registro e/ou senha inválidos")
                    setTipoMensagem("danger")
                    setMostrarMensagem(true)
                }
            })
            
            .catch((err) => {
                
                console.log("Problema ao logar aluno: ", err)
                setMensagem("Problemas ao realizar login")
                setTipoMensagem("danger")
                setMostrarMensagem(true)
            })
    }      

    if(login)

        return <Redirect to = {"/aluno/" + String(read_cookie(props.usuario.registro)) + "/principal"}/>

    return(

        <Container style = {{marginTop: "50px"}}>
            <h1>Login de Aluno</h1>
            <br></br>
            <Form style = {{margin: "15px"}}>
                <Form.Row>
                    <Col>
                        <Form.Control 
                            className = "txtRegistro"
                            value = {registro}
                            onChange = {e => handleRegistro(e)}
                            placeholder = "Digite seu registro"/>
                        <Form.Label>Registro</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtSenha"
                            value = {senha}
                            type = "password"
                            onChange = {e => handleSenha(e)}
                            placeholder = "Digite sua senha"/>
                        <Form.Label>Senha</Form.Label>
                    </Col>
                </Form.Row>
                <Button style = {{margin: "10px", float: "left"}} variant = "success"
                    onClick = {logarAluno}>Realizar Login</Button>
            </Form>
            <br></br>
            <br></br>
            <Alert show = {mostrarMensagem} onClose = {() => setMostrarMensagem(false)} 
                variant = {tipoMensagem} closeLabel = "Fechar" dismissible fade = "false">
                <Alert.Heading>{mensagem}</Alert.Heading>
            </Alert>
        </Container>
    )
}

export default LoginAluno