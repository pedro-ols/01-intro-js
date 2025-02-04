function aumentar() {
    let contador = Number(document.getElementById("counter").innerText);
    document.getElementById("counter").innerHTML = contador + 1;
};
function diminuir() {
    let contador = Number(document.getElementById("counter").innerText);
    document.getElementById("counter").innerHTML = contador - 1;
};
function resetar() {
    document.getElementById("counter").innerHTML = 0;
};