let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let sum = num1 + num2

function checkNum(){
    if(sum <= 100){
        console.log("O resultado foi menor ou igual á 100")
    }
    else{
        console.log("O resulatado foi:", sum)
    }
}
checkNum()