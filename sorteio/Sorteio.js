/*

Programação Web e Mobile - Sorteio de Números
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

/*

Algoritmo para a seleção aleatória de números

A seleção possui as seguintes regras:

1) Serão sorteados n números, variando de 1 a max;

2) Não podem haver números repetidos no conjunto sorteado;

3) A seleção ocorre sem reposição, isto é, o espaço amostral reduz em uma unidade a cada sorteio;

Por exemplo, se um número i não for selecionado no sorteio k cujo espaço amostral é n, então 
a probabilidade de que o mesmo seja escolhido no sorteio k+1 aumenta de 1/n para 1/(n-1).

A estratégia adotada no algoritmo é gerar um vetor contendo os algarismos de 1 até max e selecionar 
um elemento desse vetor de maneira aleatória. Após, o número sorteado é inserido no vetor resultante
e eliminado do vetor original, repetindo o processo até que n números tenham sido sorteados. 

Ao final, o vetor é ordenado de maneira crescente e o resultado é mostrado ao usuário.

No caso da seleção de números para a sena, max = 60 e n = 6.

*/

import React from "react"

//Função para ordenação crescente de um vetor
function ordCres(x, y){

    return x - y
}

//Função para geração de um vetor contendos os algarismos de 1 até "max"
function getVet(max){

    var vet = []

    for(var i = 1; i <= max; i++)

        vet.push(i)
  
    return vet
}

//Função para remoção de um elemento "elem" de um vetor "Vet"
function remover(vet, elem){

    return vet.splice(vet.indexOf(elem), 1)
}

//Função para a geração de um vetor de "n" números aleatórios, contidos no intervalo [1, max]
function vetRandom(max, n){

    var set = getVet(max)
    var random = []

    while(n > 0){

        var rand = Math.floor(Math.random() * set.length)
        var elem = set[rand]

        random.push(elem + " ")
        remover(set, elem)
        n--
    }

    return random
}

//Função para a seleção de números para jogar a sena (ou qualquer outro jogo semelhante)
function sorteio(){

    let max = 60
    let n = 6 
    let random = vetRandom(max, n).sort(ordCres)
  
    return(
  
        <div>
            <h1>Números para a Mega-Sena:</h1>
            <h1>{Random}</h1>
        </div>
    )
}

export default sorteio
