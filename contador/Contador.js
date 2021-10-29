/*

Programação Web e Mobile - Contador (Classe Contador)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

import React, {useState} from "react"

const Contador = () => {

    const [valor, setValor] = useState(0)
    const incrementar = () => setValor(currentValor => currentValor + 1)
    const decrementar = () => setValor(currentValor => currentValor - 1)
    
    return(
    
        <div className = "App">
            <div>
                <h2>Contador</h2>
            </div>
            <div>
                <input typeof = "number" readOnly value = {valor}/>
            </div>
            <div className = "Botões">
                <button onClick = {incrementar}>+</button>
                <button onClick = {decrementar}>-</button>
            </div>
        </div>
    )
}

export default Contador
