/*

Programação Web e Mobile - Calculadora (Funções)
Felipe Daniel Dias dos Santos - 11711ECP004
Graduação em Engenharia de Computação - Faculdade de Engenharia Elétrica - Universidade Federal de Uberlândia

*/

var res
var num = ""
var op = -1

function clearDisplay(){
    
    num = ""
    document.getElementById("display").value = ""
}

function updateDisplay(val){

    document.getElementById("display").value = val
}

function setNum(myNum){

    if(op == -2){
    
        num = myNum
        op = -1
    }
    
    else
        
        num += myNum

    updateDisplay(num)
}

function setOp(myOp){

    op = myOp
    res = parseFloat(num)
    num = ""
}

function equal(){

    if(op == 1)

        res += parseFloat(num)

    if(op == 2)

        res -= parseFloat(num)

    if(op == 3)

        res *= parseFloat(num)

    if(op == 4)

        res /= parseFloat(num)

    if(op == 5)

        res **= 0.5

    if(op == 6)

        res **= parseFloat(num)
    
    num = res.toString()
    updateDisplay(num)
    op = -2
}
