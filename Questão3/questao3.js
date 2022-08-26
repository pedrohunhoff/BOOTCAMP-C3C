let nota = document.getElementById("grade");
let btnEnviar = document.getElementById("send");
let resposta = document.getElementById("answer");

btnEnviar.onclick = () => verificarAprovacao(nota.value);

function verificarAprovacao(nota){
    let notaNumero = Number.parseFloat(nota);
    if(notaNumero<38){
        resposta.innerHTML = "Reprovado(a), a nota final do aluno é: " + notaNumero;
    } else if (notaNumero < 0 || notaNumero > 100 || isNaN(notaNumero)){
        resposta.innerHTML = "Digite uma nota válida no intervalo de 0 a 100";
    } else if(notaNumero%5 >= 3){
        resposta.innerHTML = "Aprovado(a), a nota final do aluno é: " + (notaNumero + (5-(notaNumero%5)));
    } else {
        resposta.innerHTML = "Aprovado(a), a nota final do aluno é: " + notaNumero;
    }
}
