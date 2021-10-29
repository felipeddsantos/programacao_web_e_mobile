/*

Programação Web e Mobile - Situação de Alunos Baseado em Notas
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

import React from "react"
import alunos from "./alunos"

//Função para calcular a média das notas de um aluno
function getMedia(aluno){

    return (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4
}

//Função para verificar a situação de um aluno baseado em sua média
function getStatus(media){

    if(media >= 60)

        return "Aprovado" 

    return "Reprovado"
}

//Função para exibir todos os dados do arquivo "alunos.json", juntamente com a média e situação de cada aluno
export default props => {
  
    const getAlunos = alunos.map(aluno => {

        let media = getMedia(aluno);
        let status = getStatus(media);
  
        return(

            <p1>
                Aluno: {aluno.nome} 
                <li>Nota 1: {aluno.nota1}</li>
                <li>Nota 2: {aluno.nota2}</li>
                <li>Nota 3: {aluno.nota3}</li>
                <li>Nota 4: {aluno.nota4}</li>
                <li>Média: {media}</li>
                <li>Situação: {status}</li>
                <br></br>
            </p1>
        )
    })

    return(
        
        <div>{getAlunos}</div>
    )
}
