// function calcular(){
//     let numA = Number(document.getElementById("numA").value);
//     let numB = Number(document.getElementById("numB").value);
// };

function somar(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
     //função soma 
    let soma = numA + numB;
    document.getElementById("result").innerHTML = soma;
    
    if(!numA || !numB){
        document.getElementById("result").innerHTML = "Insira dois números";
    }
};
function subtrair(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    //função subtração 
    let diferenca = numA - numB;
    document.getElementById("result").innerHTML = diferenca;

    if(!numA || !numB){
        document.getElementById("result").innerHTML = "Insira dois números";
    }
};
function multiplicar(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    let multiplicacao = numA ** numB;
    document.getElementById("result").innerHTML = multiplicacao;

    if(!numA || !numB){
        document.getElementById("result").innerHTML = "Insira dois números";
    }
};
function dividir(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    //função divisão
    let divisao = numA / numB;
    document.getElementById("result").innerHTML = divisao;

    if(!numA || !numB){
        document.getElementById("result").innerHTML = "Insira dois números";
    }
};

