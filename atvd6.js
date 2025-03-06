let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);

//função para mostrar o maior número
function mostrarMaior(num){
    console.log("dentre esses números:", num1, num2, num3, "O maior número desses é:", num);
}

function check(){
    if(num1 > num2 && num1 > num3){
        mostrarMaior(num1);
    }
    else if(num2 > num1 && num2 > num3){
        mostrarMaior(num2); 
    }
    else{
        mostrarMaior(num3);
    }
}
check()
