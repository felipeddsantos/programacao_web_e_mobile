/*

Programação Web e Mobile - Calculadora (Botão)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

import React from "react"

export default propos => {
 
    return(
        
        <div>
            <button onClick = {propos.set7}>7</button>
            <button onClick = {propos.set8}>8</button>
            <button onClick = {propos.set9}>9</button>           
            <button onClick = {propos.setDiv}>/</button> 
            <button onClick = {propos.setMod}>mod</button> 
            <br></br>
            <button onClick = {propos.set4}>4</button>           
            <button onClick = {propos.set5}>5</button>           
            <button onClick = {propos.set6}>6</button>           
            <button onClick = {propos.setMult}>*</button>  
            <button onClick = {propos.setExp}>^</button>  
            <br></br>         
            <button onClick = {propos.set1}>1</button>           
            <button onClick = {propos.set2}>2</button>      
            <button onClick = {propos.set3}>3</button>           
            <button onClick = {propos.setSub}>-</button>   
            <button onClick = {propos.setPercent}>%</button>   
            <br></br>        
            <button onClick = {propos.set0}>0</button>           
            <button onClick = {propos.setFrac}>.</button>  
            <button onClick = {propos.setEqual}>=</button>   
            <button onClick = {propos.setAdd}>+</button>   
            <button onClick = {propos.setClear}>AC</button>                                                                                                               
        </div>
    )
}
