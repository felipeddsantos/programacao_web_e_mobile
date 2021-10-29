import BootstrapTable from "react-bootstrap-table-next"
import React, {useState, useEffect} from "react"
import {bake_cookie, read_cookie} from "sfcookies"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

export default function DisciplinasProfessor(props){

    const [listaDisciplinas, setListaDisciplinas] = useState([])
    const [selecionado, setSelecionado] = useState(false)

    const colunas = [
    
        {
            dataField: "nome",
            text: "Nome"
        },

        {
            dataField: "codigo",
            text: "Código"
        }
    ]

    useEffect(() => {

        return () => {

            console.log("Dentro da página de disciplinas do professor")
        }
    }, [])

    useEffect(() => {

        async function procurarDisciplinas(){

            try{

                const disciplinas = await axios.get("http://localhost:8000/professor/" + String(read_cookie(props.usuario.registro)) + "/disciplinas")
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

    const selecionarLinha = {
        
        mode: "radio",
        clickToSelect: true,

        onSelect: (row, isSelect) => {
            
            if(isSelect){

                setSelecionado(true)
                bake_cookie(props.usuario.codigo, row.codigo)  
            }
        }
    }

    if(selecionado)

        return <Redirect to = {"/professor/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo))}/>

    return(

        <div>
            <br></br>
            <h1>Disciplinas</h1>
            <br></br>
            <div>
                <BootstrapTable
                    striped bordered hover variant = "dark"
                    keyField = "codigo"
                    data = {listaDisciplinas}
                    columns = {colunas}
                    selectRow = {selecionarLinha}
                    noDataIndication = "Sem disciplinas disponíveis"/>
            </div>
            <div>
                <table>
                    <tr></tr>
                </table>
            </div>
        </div>
    )
}