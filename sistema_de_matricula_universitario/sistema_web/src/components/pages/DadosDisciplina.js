import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState, useEffect} from "react"
import {Form, Container, Col, Button} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {read_cookie} from "sfcookies"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

function DadosDisciplina(props){

    const [nome, setNome] = useState("")
    const [codigo, setCodigo] = useState("")
    const [professor, setProfessor] = useState("")
    const [curso, setCurso] = useState("")
    const [periodo, setPeriodo] = useState(0)
    const [carga, setCarga] = useState(0)
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    const [remocao, setRemocao] = useState(false)
    
    const handleNome = (e) => setNome(e.target.value)
    const handleCodigo = (e) => setCodigo(e.target.value)
    const handleProfessor = (e) => setProfessor(e.target.value)
    const handlePeriodo = (e) => setPeriodo(e.target.value)
    const handleCarga = (e) => setCarga(e.target.value)

    useEffect(() => {

        return () => {

            console.log("Dentro da página de dados de disciplina")
        }
    }, [mostrarMensagem])

    useEffect(() => {

        async function procurarDisciplina(){

            try{

                const disciplina = await axios.get("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo)))
                console.log(disciplina.data)
                
                setNome(disciplina.data[0].nome)
                setCodigo(disciplina.data[0].codigo)
                setProfessor(disciplina.data[0].professor)
                setCurso(disciplina.data[0].curso)
                setPeriodo(disciplina.data[0].periodo)
                setCarga(disciplina.data[0].carga)
            }
            
            catch(error){
            
                alert("Ocorreu um erro")
            }
        }

        console.log("Carregando disciplina")

        procurarDisciplina()
    }, [])

    const alterarDisciplina = () => {

        let disciplinaAlterada = {               
            
            nome: nome,
            codigo: codigo,
            professor: professor,
            periodo: periodo,
            carga: carga
        }

        console.log(disciplinaAlterada)

        axios.post("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo)) + "/alteracao", disciplinaAlterada, axiosConfig)
        
            .then((res) => {

                console.log("Resposta recebida: ", res)                              
                setMensagem("Alteração realizada com sucesso")
                setTipoMensagem("success")
                setMostrarMensagem(true)
            })
            
            .catch((err) => {
                
                console.log("Problema ao alterar disciplina: ", err)
                setMensagem("Código já existente")
                setTipoMensagem("danger")
                setMostrarMensagem(true)
            })
    }

    const removerDisciplina = (e) => {
        
        axios.delete("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo)) + "/remocao", axiosConfig)

            .then((res) => {

                console.log("Resposta recebida: ", res)  
                setRemocao(true)
                alert("Remoção realizada com sucesso")                             
            })

            .catch((err) => {

                console.log("Problema ao remover disciplina: ", err)
                setMensagem("Problemas ao realizar remoção")
                setTipoMensagem("danger")
                setMostrarMensagem(true)
            })   
    }

    if(remocao)

        return <Redirect to = {"/coordenador/" + String(read_cookie(props.usuario.registro)) + "/disciplinas"}/>

    return(

        <Container style = {{marginTop: "50px"}}>
            <h1>Dados da Disciplina</h1>
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
                        <Form.Control
                            className = "txtCodigo"
                            value = {codigo}
                            onChange = {e => handleCodigo(e)}/>
                        <Form.Label>Codigo</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "txtProfessor"
                            value = {professor}
                            onChange = {e => handleProfessor(e)}/>
                        <Form.Label>Registro do professor</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className = "intPeriodo"
                            value = {periodo}
                            type = "number"
                            onChange = {e => handlePeriodo(e)}/>
                        <Form.Label>Período</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control 
                            className = "intCarga"
                            value = {carga}
                            type = "number"
                            onChange = {e => handleCarga(e)}/>
                        <Form.Label>Carga horária</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control 
                            readOnly
                            className = "txtCurso"
                            value = {curso}/>
                        <Form.Label>Curso</Form.Label>
                    </Col>
                </Form.Row>
                <Button style = {{margin: "10px", float: "left"}} variant = "success"
                    onClick = {alterarDisciplina}>Salvar Alterações</Button>
                <Button style = {{margin: "10px", float: "left"}} variant = "danger"
                    onClick = {removerDisciplina}>Deletar Disciplina</Button>
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

export default DadosDisciplina