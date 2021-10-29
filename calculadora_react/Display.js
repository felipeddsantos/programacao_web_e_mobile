/*

Programação Web e Mobile - Calculadora (Display)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

import React from "react"

export default props => {

    return(
         
        <div>
            <input typeof = "number" readOnly
                value = {props.res} 
                onChange = {e => props.setRes(+e.target.value)}/>
        </div>
    )
}
