import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, {textFilter} from "react-bootstrap-table2-filter"
import React, {useState, useEffect} from "react"
import {read_cookie} from "sfcookies"
import {Button} from "react-bootstrap"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

var requisicao = []

export default function MatriculaAluno(props){

    const [listaDisciplinas, setListaDisciplinas] = useState([])
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)

    const colunas = [

        {
            dataField: "codigo",
            text: "Código",
            filter: textFilter(

                {
                    placeholder: "Digite o código",
                    onFilter: filterVal => console.log("Conteúdo do filtro: ${filterVal}")
                }
            )
        },
    
        {
            dataField: "nome",
            text: "Nome"
        },

        {
            dataField: "curso",
            text: "Curso ofertante"
        },

        {
            dataField: "periodo",
            text: "Período"
        },
    
        {
            dataField: "carga",
            text: "Carga horária"
        }
    ]

    useEffect(() => {

        return () => {

            console.log("Dentro da página de matrícula do aluno")
        }
    }, [mostrarMensagem])

    useEffect(() => {

        async function procurarDisciplinas(){

            try{

                const disciplinas = await axios.get("http://localhost:8000/aluno/" + String(read_cookie(props.usuario.registro)) + "/disciplinas")
                console.log(disciplinas.data)
                setListaDisciplinas(disciplinas.data)
            }
            
            catch(error){
            
                alert("Ocorreu um erro")
            }
        }

        console.log("Carregando disciplinas")

        procurarDisciplinas()
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

                console.log(row.codigo)
                requisicao.push(row.codigo)            
            }
            
            else

                requisicao.splice(requisicao.indexOf(row.codigo), 1)
        }
    }

    const inserirRequisicao = () => {

        axios.post("http://localhost:8000/aluno/" + String(read_cookie(props.usuario.registro)) + "/requisicao", requisicao, axiosConfig)
        
        .then((res) => {

            console.log("Resposta recebida: ", res)
            setMensagem("Requisição realizada com sucesso")
            setTipoMensagem("success")
            setMostrarMensagem(true)                            
        })
            
        .catch((err) => {
                
            console.log("Problema ao realizar requisição: ", err);
            setMensagem("Problemas ao realizar requisição")
            setTipoMensagem("danger")
            setMostrarMensagem(true)
        })

        requisicao = []
    }      

    return(

        <div>
            <br></br>
            <h1>Requisição de Matrícula</h1>
            <br></br>
            <div>
                <BootstrapTable
                    striped bordered hover variant = "dark"
                    keyField = "codigo"
                    data = {listaDisciplinas}
                    columns = {colunas}
                    selectRow = {selecionarLinha}
                    filter = {filterFactory({aplicarFiltro})}
                    filterPosition = "top"
                    noDataIndication = "Sem disciplinas disponíveis"/>
            </div>
            <Button style = {{margin: "10px", float: "left"}} variant = "success"
                  onClick = {inserirRequisicao}>Realizar Requisição</Button>
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