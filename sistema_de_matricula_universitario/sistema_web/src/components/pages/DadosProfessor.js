import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from "react"
import {Form, Container, Col, Button} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {read_cookie} from "sfcookies"
import MaskedFormControl from "react-bootstrap-maskedinput"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

function DadosProfessor(props){

    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")
    const [registro, setRegistro] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    const [remocao, setRemocao] = useState(false)
    
    const handleNome = (e) => setNome(e.target.value)
    const handleCPF = (e) => setCPF(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleSenha = (e) => setSenha(e.target.value)
    const handleSenha2 = (e) => setSenha2(e.target.value)
    const handleNascimento = (e) => setNascimento(e.target.value)
    const handleEndereco = (e) => setEndereco(e.target.value)
    const handleTelefone = (e) => setTelefone(e.target.value)
    const handleRegistro = (e) => setRegistro(e.target.value)

    useEffect(() => {

        return () => {

            console.log("Dentro da página de dados do professor")
        }
    }, [mostrarMensagem])

    useEffect(() => {

        async function encontrarProfessor(){

            try{

                const professor = await axios.get("http://localhost:8000/professor/" + String(read_cookie(props.usuario.registro)) + "/dados")
                console.log(professor.data)
                
                setNome(professor.data[0].nome)
                setCPF(professor.data[0].cpf)
                setEmail(professor.data[0].email)
                setSenha(professor.data[0].senha)
                setSenha2(professor.data[0].senha)
                setNascimento(professor.data[0].nascimento)
                setEndereco(professor.data[0].endereco)
                setTelefone(professor.data[0].telefone)
                setRegistro(professor.data[0].registro)
            }
            
            catch(error){
            
                alert("Ocorreu um erro")
            }
        }

        console.log("Carregando professor")

        encontrarProfessor()
    }, [])

    const alterarProfessor = () => {

        if(senha === senha2){

            let professorAlterado = {               
            
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha,
                nascimento: nascimento,
                endereco: endereco,
                telefone: telefone,
                registro: registro
            }

            console.log(professorAlterado)

            axios.post("http://localhost:8000/professor/" + String(read_cookie(props.usuario.registro)) + "/alteracao", professorAlterado, axiosConfig)
        
                .then((res) => {

                    console.log("Resposta recebida: ", res)
                    setMensagem("Alteração realizada com sucesso")
                    setTipoMensagem("success")
                    setMostrarMensagem(true)
                })
            
                .catch((err) => {
                
                    console.log("Problema ao alterar professor: ", err)
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

    const removerProfessor = (e) => {
        
        axios.delete("http://localhost:8000/professor/" + String(read_cookie(props.usuario.registro)) + "/remocao", axiosConfig)

            .then((res) => {

                console.log("Resposta recebida: ", res)       
                setRemocao(true)
                alert("Remoção realizada com sucesso")                        
            })

            .catch((err) => {

                console.log("Problema ao remover professor: ", err)
                setMensagem("Problemas ao realizar remoção")
                setTipoMensagem("danger")
                setMostrarMensagem(true)
            })   
    }

    if(remocao)

        return <Redirect to = "/login/professor"/>

    return(

        <Container style = {{marginTop: "50px"}}>
            <h1>Dados Cadastrais</h1>
            <br></br>
            <Form style = {{margin: "15px"}}>
                <Form.Row>
                    <Col>
                        <Form.Control
                            className = "txtNome"
                            value = {nome}
                            onChange = {e => handleNome(e)}/>
                        <Form.Label>Nome</Form.Label>
                    </Col>
                    <Col>
                        <MaskedFormControl
                            className = "txtCPF"
                            value = {cpf}
                            onChange = {e => handleCPF(e)}
                            mask = "111.111.111-11"/>
                        <Form.Label>CPF</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtEmail"
                            value = {email}
                            type = "email"
                            onChange = {e => handleEmail(e)}/>
                        <Form.Label>Email</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtSenha"
                            type = "password"
                            onChange = {e => handleSenha(e)}/>
                        <Form.Label>Senha</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtSenha2"
                            type = "password"
                            onChange = {e => handleSenha2(e)}/>
                        <Form.Label>Confirmar senha</Form.Label>
                    </Col>
                    <Col>
                        <MaskedFormControl
                            className = "dateNascimento"
                            value = {nascimento}
                            onChange = {e => handleNascimento(e)}
                            mask = "11/11/1111"/>
                        <Form.Label>Data de nascimento</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control 
                            className = "txtEndereco"
                            value = {endereco}
                            onChange = {e => handleEndereco(e)}/>
                        <Form.Label>Endereço</Form.Label>
                    </Col>
                    <Col>
                        <MaskedFormControl
                            className = "txtTelefone"
                            value = {telefone}
                            onChange = {e => handleTelefone(e)}
                            mask = "(11) 11111-1111"/>
                        <Form.Label>Telefone</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control 
                            className = "txtRegistro"
                            onChange = {e => handleRegistro(e)}
                            value = {registro}/>
                        <Form.Label>Registro</Form.Label>
                    </Col>
                </Form.Row>
                <Button style = {{margin: "10px", float: "left"}} variant = "success"
                    onClick = {alterarProfessor}>Salvar Alterações</Button>
                <Button style = {{margin: "10px", float: "left"}} variant = "danger"
                    onClick = {removerProfessor}>Deletar Conta</Button>
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

export default DadosProfessor