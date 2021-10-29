import BootstrapTable from "react-bootstrap-table-next"
import React, {useState, useEffect} from "react"
import {read_cookie} from "sfcookies"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

export default function DisciplinasAluno(props){

    const [listaDisciplinas, setListaDisciplinas] = useState([])

    const colunas = [

        {
            dataField: "disciplina",
            text: "Código"
        },
    
        {
            dataField: "nome",
            text: "Nome"
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

            console.log("Dentro da página de disciplinas do aluno")
        }
    }, [])

    useEffect(() => {

        async function procurarDisciplinas(){

            try{

                const disciplinas = await axios.get("http://localhost:8000/aluno/" + String(read_cookie(props.usuario.registro)) + "/matriculas")
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

    return(

        <div>
            <br></br>
            <h1>Notas e Faltas</h1>
            <br></br>
            <div>
                <BootstrapTable 
                    striped bordered hover variant = "dark"
                    keyField = "codigo"
                    data = {listaDisciplinas}
                    columns = {colunas}
                    noDataIndication = "Sem disciplinas matriculadas"/>
            </div>
            <div>
                <table>
                    <tr></tr>
                </table>
            </div>
        </div>
    )
}