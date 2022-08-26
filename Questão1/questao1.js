let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");
let side3 = document.getElementById("side3");
let btnSend = document.getElementById("btnSend");
let answer = document.getElementById("answer")

btnSend.onclick = () => testTriangle(side1.value, side3.value, side2.value);

function testTriangle(side1, side2, side3){
    if(side1 == "" || side2 == "" || side3 == "" || side1 <= 0 || side2 <= 0 || side3 <= 0){
        answer.innerHTML = "Digite valores válidos para o tamanho dos lados"
    } else if(side1 == side2 && side2 == side3) {
        answer.innerHTML = "O triângulo é equilátero"
    } else if(side1 != side2 && side2 != side3 && side1 != side3){
        answer.innerHTML = "O triângulo é escaleno"
    } else
        answer.innerHTML = "O triângulo é isóceles"
}