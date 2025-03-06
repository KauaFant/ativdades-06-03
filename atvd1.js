let age = Math.floor(Math.random() * 20);

function votarIdade(){
    if( age >=16){
        console.log("Você já pode votar!");
    }
    else{
        console.log("Você e novinho(a), não pode votar")
    }
}

votarIdade()