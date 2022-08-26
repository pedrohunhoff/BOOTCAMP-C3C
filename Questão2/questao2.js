let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let btnResolver = document.getElementById("btnSolver");
let resposta = document.getElementById("answer");
let vetorResposta = [];

btnResolver.onclick = () => bhaskaraSolver(a.value, b.value, c.value);

function bhaskaraSolver(a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c);
    console.log(typeof (a))
    if (a != 0 && b && c) {
        if (delta < 0) {
            resposta.innerHTML = "Delta é negativo, as raízes não são números reais";
        } else if (delta == 0) {
            vetorResposta[0] = (-b / (2 * a));
            vetorResposta[1] = vetorResposta[0];
            resposta.innerHTML = "Raízes: " + vetorResposta;
        } else {
            vetorResposta[0] = (-b + Math.sqrt(delta)) / (2 * a);
            vetorResposta[1] = (-b - Math.sqrt(delta)) / (2 * a);
            resposta.innerHTML = "Raízes: " + vetorResposta;
        }
    } else {
        resposta.innerHTML = "Digite valores válidos para os coeficiente, o coeficiente A deve ser diferente de 0, caso um dos outros coeficientes não esteja presente na equação, coloque 0 no seu valor"
    }

}