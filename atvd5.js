let num = Math.floor(Math.random() * 100)

function checkPairOdd(){
    if(num %2 == 1){
        console.log("O numero é ímpar", num)
    }
    else{
        console.log("O número é par", num)
    }
}
checkPairOdd()
