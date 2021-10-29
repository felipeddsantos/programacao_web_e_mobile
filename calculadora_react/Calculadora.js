/*

Programação Web e Mobile - Calculadora (Programa Principal)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

import React, {useState} from "react"
import Display from "./Display"
import Botao from "./Botao"
import "./estilo.css"

export default propos => {
    
    const [res, setRes] = useState("")
    const [num, setNum] = useState()    
    const [op, setOp] = useState(-1)    

    const n1 = () => {

        if(op == -2){

            setRes("1")
            setOp(-1)
        }

        else

            setRes(res + "1")
    }
    
    const n2 = () => {

        if(op == -2){

            setRes("2")
            setOp(-1)
        }

        else

            setRes(res + "2")
    }

    const n3 = () => {

        if(op == -2){

            setRes("3")
            setOp(-1)
        }

        else

            setRes(res + "3")
    }

    const n4 = () => {

        if(op == -2){

            setRes("4")
            setOp(-1)
        }

        else

            setRes(res + "4")
    }

    const n5 = () => {

        if(op == -2){

            setRes("5")
            setOp(-1)
        }

        else

            setRes(res + "5")
    }

    const n6 = () => {

        if(op == -2){

            setRes("6")
            setOp(-1)
        }

        else

            setRes(res + "6")
    }

    const n7 = () => {

        if(op == -2){

            setRes("7")
            setOp(-1)
        }

        else

            setRes(res + "7")
    }

    const n8 = () => {

        if(op == -2){

            setRes("8")
            setOp(-1)
        }

        else

            setRes(res + "8")
    }

    const n9 = () => {

        if(op == -2){

            setRes("9")
            setOp(-1)
        }

        else

            setRes(res + "9")
    }

    const n0 = () => {

        if(op == -2){

            setRes("0")
            setOp(-1)
        }

        else

            setRes(res + "0")
    }

    const frac = () => {

        if(op == -2){

            setRes(".")
            setOp(-1)
        }

        else

            setRes(res + ".")
    }

    const add = () => {

        setOp(0)
        setNum(parseFloat(res))
        setRes("")
    }

    const sub = () => {

        setOp(1)
        setNum(parseFloat(result))
        setRes("")
    }

    const mult = () => {

        setOp(2)
        setNum(parseFloat(res))
        setRes("")
    }

    const div = () => {

        setOp(3)
        setNum(parseFloat(res))
        setRes("")
    }

    const exp = () => {

        setOp(4)
        setNum(parseFloat(res))
        setRes("")
    }

    const mod = () => {

        setOp(5)
        setNum(parseFloat(res))
        setRes("")
    }

    const percent = () => {

        setOp(6)
        setNum(parseFloat(res))
        setRes("")
    }

    const equal = () => {

        if(op == 0)

            setRes(num + parseFloat(res))

        if(op == 1)

            setRes(num - parseFloat(res))

        if(op == 2)

            setRes(num * parseFloat(res))

        if(op == 3)

            setRes(num / parseFloat(res))
      
        if(op == 4)

            setRes(num ** parseFloat(res))
      
        if(op == 5)

            setRes(num % parseFloat(res))
      
        if(op == 6)

            setRes((num * parseFloat(res)) / 100)

        setOp(-2)
    }

    const clear = () => {

        setRes("")
        setNum()
    }

    return(

        <div className = "Calculator">
            <br></br><br></br><br></br><br></br><br></br>
            <Display result = {result}/>
            <Botaos set1 = {n1}
            set2 = {n2}
            set3 = {n3}
            set4 = {n4}
            set5 = {n5}
            set6 = {n6}
            set7 = {n7}
            set8 = {n8}
            set9 = {n9}
            set0 = {n0}
            setFrac = {frac}
            setAdd = {add}
            setSub = {sub}
            setMult = {mult}
            setDiv = {div}
            setExp = {exp}
            setMod = {mod}
            setPercent = {percent}
            setEqual = {equal}
            setClear = {clear}/>
        </div>
    )
}
