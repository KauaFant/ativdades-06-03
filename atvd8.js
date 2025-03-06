let pares = 0
let impar = 0

function checkPairOdd(){
for(i=1; i<=100; i++){
    let num = Math.floor(Math.random() * 100)

    if(num %2 == 1){
        impar += 1 
    }
    else{
        pares += 1
    }
}

console.log("O total de pares:",pares)
console.log("O total de impares:",impar)
}
checkPairOdd()