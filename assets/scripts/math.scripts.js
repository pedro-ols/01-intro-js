function calcular(){
    let numA = numer(document.getElementById("numA").value)
    let numB = document.getElementById("numB").value

    // alert(numA);
    // alert(numB);

    //função soma 
    let soma = numA + numB;
    document.getElementById("result").innerHTML = soma;

    //função subtração 
    let diferenca = numA - numB;
    document.getElementById("result").innerHTML = diferenca;

    //função multiplicação
    let multiplicacao = numA * numB;
    document.getElementById("result").innerHTML = multiplicacao;

    //função divisão
    let divisao = numA / numB;
    document.getElementById("result").innerHTML = divisao;
};