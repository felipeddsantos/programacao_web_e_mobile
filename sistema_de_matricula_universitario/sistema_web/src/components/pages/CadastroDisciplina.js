import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from "react"
import {read_cookie} from "sfcookies"
import {Form, Container, Col, Button} from "react-bootstrap"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

function CadastroDisciplina(props){

    const [nome, setNome] = useState("")
    const [codigo, setCodigo] = useState("")
    const [professor, setProfessor] = useState("")
    const [curso, setCurso] = useState(read_cookie(props.usuario.curso))
    const [periodo, setPeriodo] = useState(0)
    const [carga, setCarga] = useState(0)
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    
    const handleNome = (e) => setNome(e.target.value)
    const handleCodigo = (e) => setCodigo(e.target.value)
    const handleProfessor = (e) => setProfessor(e.target.value)
    const handlePeriodo = (e) => setPeriodo(e.target.value)
    const handleCarga = (e) => setCarga(e.target.value)

    useEffect(() => {

        return () => {

            console.log("Dentro da página de cadastro de disciplina")
        }
    }, [mostrarMensagem])    

    const inserirDisciplina = () => {

        let disciplinaInserida = {               
            
            nome: nome,
            codigo: codigo,
            professor: professor,
            curso: curso,
            periodo: periodo,
            carga: carga
        }

        console.log(disciplinaInserida)

        axios.post("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/cadastro", disciplinaInserida, axiosConfig)
        
            .then((res) => {

                console.log("Resposta recebida: ", res)                           
                setNome("")
                setCodigo("")
                setProfessor("")
                setCurso(read_cookie(props.usuario.curso))
                setPeriodo(0)
                setCarga(0)
                setMensagem("Cadastro realizado com sucesso")
                setTipoMensagem("success")
                setMostrarMensagem(true)
            })
            
            .catch((err) => {
                
                console.log("Problema ao inserir disciplina: ", err)
                setMensagem("Código já existente")
                setTipoMensagem("danger")
                setMostrarMensagem(true)
            })
    }

    return(

        <Container style = {{marginTop: "50px"}}>
            <h1>Cadastro de Disciplina</h1>
            <br></br>
            <Form style = {{margin: "15px"}}>
                <Form.Row>
                    <Col>
                        <Form.Control
                            className = "txtNome"
                            value = {nome}
                            onChange = {e => handleNome(e)}
                            placeholder = "Digite o nome"/>
                        <Form.Label>Nome</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtCodigo"
                            value = {codigo}
                            onChange = {e => handleCodigo(e)}
                            placeholder = "Digite o código"/>
                        <Form.Label>Código</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtProfessor"
                            value = {professor}
                            onChange = {e => handleProfessor(e)}
                            placeholder = "Digite o registro do professor"/>
                        <Form.Label>Registro do professor</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            readOnly
                            className = "txtCurso"
                            value = {curso}/>
                        <Form.Label>Curso</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "intPeriodo"
                            value = {periodo}
                            type = "number"
                            onChange = {e => handlePeriodo(e)}
                            placeholder = "Digite o período"/>
                        <Form.Label>Período</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control 
                            className = "intCarga"
                            value = {carga}
                            type = "number"
                            onChange = {e => handleCarga(e)}
                            placeholder = "Digite a carga horária"/>
                        <Form.Label>Carga Horária</Form.Label>
                    </Col>
                </Form.Row>
                <Button style = {{margin: "10px", float: "left"}} variant = "success"
                    onClick = {inserirDisciplina}>Realizar Cadastro</Button>
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

export default CadastroDisciplina