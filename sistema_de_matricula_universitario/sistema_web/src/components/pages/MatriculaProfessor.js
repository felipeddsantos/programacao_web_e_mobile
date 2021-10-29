import React, {useState, useEffect} from "react"
import cellEditFactory, {Type} from "react-bootstrap-table2-editor"
import {read_cookie} from "sfcookies"
import {Button} from "react-bootstrap"
import BootstrapTable from "react-bootstrap-table-next"
import Alert from "react-bootstrap/Alert"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

var matricula = []

export default function MatriculaProfessor(props){

    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    const [listaMatriculas, setListaMatriculas] = useState([])

    const colunas = [

        {
            dataField: "registro",
            text: "Registro",
            editable: false
        },

        {
            dataField: "nome",
            text: "Nome",
            editable: false
        },

        {
            dataField: "nota",
            text: "Nota"
        },

        {
            dataField: "faltas",
            text: "Faltas"        
        }
    ]

    useEffect(() => {

        return () => {

            console.log("Dentro da página de matrículas do professor")
        }
    }, [mostrarMensagem])

    useEffect(() => {

        async function procurarMatriculas(){

            try{

                const matriculas = await axios.get("http://localhost:8000/professor/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo)))
                console.log(matriculas.data)
                setListaMatriculas(matriculas.data)
            }
            
            catch(error){
            
                alert("Ocorreu um erro")
            }
        }

        console.log("Carregando matrículas")

        procurarMatriculas()
    }, [])

    function alterarMatricula(row, newValue, index){

        matricula.push({aluno: index.registro, nota: index.nota, faltas: index.faltas})
        console.log(index)
    }

    const alterarMatriculas = () => {

        console.log(matricula)

        axios.post("http://localhost:8000/professor/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo)) + "/alteracao", matricula, axiosConfig)
        
            .then((res) => {

                console.log("Resposta recebida: ", res)                              
                setMensagem("Matrículas alteradas com sucesso")
                setTipoMensagem("success")
                setMostrarMensagem(true)
            })
            
            .catch((err) => {
                
                console.log("Problema ao alterar matrículas: ", err)
                setMensagem("Problemas ao alterar matrículas")
                setTipoMensagem("danger")
                setMostrarMensagem(true)
            })

            matricula = []
    }

    return(

        <div>
            <div>
                <br></br>
                <h1>Notas e Faltas</h1>
                <br></br>
                <BootstrapTable
                    keyField = "registro"
                    data = {listaMatriculas}
                    columns = {colunas}
                    cellEdit = {
                        cellEditFactory({
                            mode: "click",
                            blurToSave: true,
                            afterSaveCell: alterarMatricula
                        })
                    }
                    noDataIndication = "Sem alunos matriculados"/>
            </div>
            <div>
                <table>
                    <tr></tr>
                </table>
            </div>
            <Button style = {{margin: "10px", float: "left"}} variant = "success"
                    onClick = {alterarMatriculas}>Confirmar Alterações</Button>
            <br></br>
            <br></br>
            <Alert show = {mostrarMensagem} onClose = {() => setMostrarMensagem(false)} 
                variant = {tipoMensagem} closeLabel = "Fechar" dismissible fade = "false">
                <Alert.Heading>{mensagem}</Alert.Heading>
            </Alert>
        </div>
    )
}