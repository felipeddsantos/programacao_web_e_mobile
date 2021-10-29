import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, {textFilter} from "react-bootstrap-table2-filter"
import React, {useState, useEffect} from "react"
import {bake_cookie, read_cookie} from "sfcookies"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

const axios = require("axios")

const axiosConfig = {

    headers: {"Content-Type": "application/json;charset = UTF-8", "Access-Control-Allow-Origin": "*"}
}

export default function DisciplinasCoordenador(props){

    const [listaDisciplinas, setListaDisciplinas] = useState([])
    const [selecionado, setSelecionado] = useState(false)

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
        }
    ]

    useEffect(() => {

        return () => {

            console.log("Dentro da página de disciplinas do coordenador")
        }
    }, [])

    useEffect(() => {

        async function procurarDisciplinas(){

            try{

                const disciplinas = await axios.get("http://localhost:8000/coordenador/" + String(read_cookie(props.usuario.registro)) + "/disciplinas")
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
        
        mode: "radio",
        clickToSelect: true,

        onSelect: (row, isSelect) => {
            
            if(isSelect){

                bake_cookie(props.usuario.codigo, row.codigo)  
                setSelecionado(true)
            }
        }
    }

    if(selecionado)

        return <Redirect to = {"/coordenador/" + String(read_cookie(props.usuario.registro)) + "/disciplinas/" + String(read_cookie(props.usuario.codigo))}/>

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
                    filter = {filterFactory({aplicarFiltro})}
                    filterPosition = "top"
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