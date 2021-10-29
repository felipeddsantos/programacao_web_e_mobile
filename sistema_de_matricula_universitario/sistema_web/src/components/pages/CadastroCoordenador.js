import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from "react"
import {Form, Container, Col, Button} from "react-bootstrap"
import MaskedFormControl from "react-bootstrap-maskedinput"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

function CadastroCoordenador(){

    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")
    const [registro, setRegistro] = useState("")
    const [curso, setCurso] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    
    const handleNome = (e) => setNome(e.target.value)
    const handleCPF = (e) => setCPF(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleSenha = (e) => setSenha(e.target.value)
    const handleSenha2 = (e) => setSenha2(e.target.value)
    const handleNascimento = (e) => setNascimento(e.target.value)
    const handleEndereco = (e) => setEndereco(e.target.value)
    const handleTelefone = (e) => setTelefone(e.target.value)
    const handleRegistro = (e) => setRegistro(e.target.value)
    const handleCurso = (e) => setCurso(e.target.value)

    useEffect(() => {

        return () => {

            console.log("Dentro da página de cadastro do coordenador")
        }
    }, [mostrarMensagem])    

    const inserirCoordenador = () => {

        if(senha === senha2){

            let coordenadorInserido = {               
            
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha,
                nascimento: nascimento,
                endereco: endereco,
                telefone: telefone,
                registro: registro,
                curso: curso
            }

            console.log(coordenadorInserido)

            axios.post("http://localhost:8000/cadastro/coordenador", coordenadorInserido, axiosConfig)
        
                .then((res) => {

                    console.log("Resposta recebida: ", res)                            
                    setNome("")
                    setCPF("")
                    setEmail("")
                    setSenha("")
                    setSenha2("")
                    setNascimento("")
                    setEndereco("")
                    setTelefone("")
                    setRegistro("")
                    setCurso("")
                    setMensagem("Cadastro realizado com sucesso")
                    setTipoMensagem("success")
                    setMostrarMensagem(true)
                })
            
                .catch((err) => {
                
                    console.log("Problema ao inserir coordenador: ", err)
                    setMensagem("Registro e/ou CPF já existentes")
                    setTipoMensagem("danger")
                    setMostrarMensagem(true)
                })
        }

        else{

            console.log("Dados incoerentes")
            setMensagem("As senhas não são idênticas")
            setTipoMensagem("danger")
            setMostrarMensagem(true)
        }
    }

    return(

        <Container style = {{marginTop: "50px"}}>
            <h1>Cadastro de Coordenador</h1>
            <br></br>
            <Form style = {{margin: "15px"}}>
                <Form.Row>
                    <Col>
                        <Form.Control
                            className = "txtNome"
                            value = {nome}
                            onChange = {e => handleNome(e)}
                            placeholder = "Digite seu nome"/>
                        <Form.Label>Nome</Form.Label>
                    </Col>
                    <Col>
                        <MaskedFormControl
                            className = "txtCPF"
                            value = {cpf}
                            onChange = {e => handleCPF(e)}
                            placeholder = "Digite seu CPF"
                            mask = "111.111.111-11"/>
                        <Form.Label>CPF</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtEmail"
                            value = {email}
                            type = "email"
                            onChange = {e => handleEmail(e)}
                            placeholder = "Digite seu email"/>
                        <Form.Label>Email</Form.Label>
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
                    <Col>
                        <Form.Control
                            className = "txtSenha2"
                            value = {senha2}
                            type = "password"
                            onChange = {e => handleSenha2(e)}
                            placeholder = "Confirme sua senha"/>
                        <Form.Label>Confirmar senha</Form.Label>
                    </Col>
                    <MaskedFormControl
                            className = "dateNascimento"
                            value = {nascimento}
                            onChange = {e => handleNascimento(e)}
                            placeholder = "Digite sua data de nascimento"
                            mask = "11/11/1111"/>
                        <Form.Label>Data de nascimento</Form.Label>
                    <Col>
                        <Form.Control 
                            className = "txtEndereco"
                            value = {endereco}
                            onChange = {e => handleEndereco(e)}
                            placeholder = "Digite seu endereço"/>
                        <Form.Label>Endereço</Form.Label>
                    </Col>
                    <Col>
                        <MaskedFormControl
                            className = "txtTelefone"
                            value = {telefone}
                            onChange = {e => handleTelefone(e)}
                            placeholder = "Digite seu telefone"
                            mask = "(11) 11111-1111"/>
                        <Form.Label>Telefone</Form.Label>
                    </Col>
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
                            className = "txtCurso"
                            value = {curso}
                            onChange = {e => handleCurso(e)}
                            placeholder = "Digite seu curso"/>
                        <Form.Label>Curso</Form.Label>
                    </Col>
                </Form.Row>
                <Button style = {{margin: "10px", float: "left"}} variant = "success"
                    onClick = {inserirCoordenador}>Realizar Cadastro</Button>
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

export default CadastroCoordenador