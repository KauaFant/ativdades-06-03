let name = "DeFant";
let nameUC = "database";
let grade = Math.floor(Math.random() * 10);

function checkGrade(){
    if(grade <=6){
        console.log("Baixo desempenho")
    }
    else if(grade >=7 && grade <=8){
    console.log("Bom desempenho!") 
    }
    else{
        console.log("Exelente desempenho!")
    }
}
checkGrade()