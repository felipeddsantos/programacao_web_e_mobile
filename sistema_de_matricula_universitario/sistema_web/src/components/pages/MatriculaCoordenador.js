import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, {textFilter} from "react-bootstrap-table2-filter"
import React, {useState, useEffect} from "react"
import {read_cookie} from "sfcookies"
import {Button} from "react-bootstrap"
import Alert from "react-bootstrap/Alert"

const axios = require("axios");

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

var matricula = []

export default function MatriculaCoordenador(props){

    const [remover, setRemover] = useState(false)
    const [listaRequisicoes, setListaRequisicoes] = useState([])
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)

    const colunas = [

        {
            dataField: "id",
            text: "#"
        },
    
        {
            dataField: "aluno",
            text: "Registro do aluno",
            filter: textFilter(

                {
                    placeholder: "Digite o registro",
                    onFilter: filterVal => console.log("Conteúdo do filtro: ${filterVal}")
                }
            )
        },

        {
            dataField: "nome_aluno",
            text: "Nome do aluno"
        },

        {
            dataField: "disciplina",
            text: "Código da disciplina"
        },

        {
            dataField: "nome_disciplina",
            text: "Nome da disciplina"
        }
    ]

    useEffect(() => {

        return () => {

            console.log("Dentro da página de matrícula do coordenador")
        }
    }, [mostrarMensagem])

    useEffect(() => {

        async function procurarRequisicoes(){

            try{

                const requisicoes = await axios.get("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/requisicoes")
                console.log(requisicoes.data)
                setListaRequisicoes(requisicoes.data)
            }
            
            catch(error){
            
                alert("Ocorreu um erro")
            }
        }

        console.log("Carregando requisições")

        procurarRequisicoes()
    }, [])

    function aplicarFiltro(novoResultado, novoFiltro){
        
        console.log(novoResultado)
        console.log(novoFiltro)
    }

    const selecionarLinha = {
        
        mode: "checkbox",
        clickToSelect: true,

        onSelect: (row, isSelect) => {
            
            if(isSelect){

                console.log(row.aluno)
                console.log(row.disciplina)
                matricula.push({aluno: row.aluno, disciplina: row.disciplina})                     
            }
            
            else

                matricula.splice(matricula.indexOf({aluno: row.aluno, disciplina: row.disciplina}), 1)
        }
    }

    const inserirMatricula = async () => {

        await axios.post("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/matricula", matricula, axiosConfig)
        
        .then((res) => {

            console.log("Resposta recebida: ", res)
            setMensagem("Matrícula realizada com sucesso")
            setTipoMensagem("success")
            setMostrarMensagem(true)                            
        })
            
        .catch((err) => {
                
            console.log("Problema ao realizar matrícula: ", err)
            setMensagem("Problemas ao realizar matrícula")
            setTipoMensagem("danger")
            setMostrarMensagem(true)
        })

        removerRequisicoes()
    }  
    
    const removerRequisicoes = async () => {

        await axios.post("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/delrequisicoes", matricula, axiosConfig)

        .then((res) => {

            console.log("Resposta recebida: ", res)
            setMensagem("Requisições processadas com sucesso")
            setTipoMensagem("success")
            setMostrarMensagem(true)                             
        })

        .catch((err) => {

            console.log("Problema ao remover requisições: ", err)
            setMensagem("Problemas ao remover requisições")
            setTipoMensagem("danger")
            setMostrarMensagem(true)
        })  

        matricula = []
    }

    return(

        <div>
            <br></br>
            <h1>Requisições de Matrícula</h1>
            <br></br>
            <div>
                <BootstrapTable
                    striped bordered hover variant = "dark"
                    keyField = "id"
                    data = {listaRequisicoes}
                    columns = {colunas}
                    selectRow = {selecionarLinha}
                    filter = {filterFactory({aplicarFiltro})}
                    filterPosition = "top"
                    noDataIndication = "Sem requisições disponíveis"/>
            </div>
            <Button style = {{margin: "10px", float: "left"}} variant = "success"
                onClick = {inserirMatricula}>Aceitar Requisições</Button>
            <Button style = {{margin: "10px", float: "left"}} variant = "danger"
                onClick = {removerRequisicoes}>Recusar Requisições</Button>
            <br></br>
            <br></br>
            <Alert show = {mostrarMensagem} onClose = {() => setMostrarMensagem(false)} 
                variant = {tipoMensagem} closeLabel = "Fechar" dismissible fade = "false">
                <Alert.Heading>{mensagem}</Alert.Heading>
            </Alert>
            <div>
                <table>
                    <tr></tr>
                </table>
            </div>
        </div>
    )
}