let number = document.getElementById("number");
let answer = document.getElementById("answer");
let btnRun = document.getElementById("btnRun");
let sequence = [];

btnRun.onclick = () => createCounter(number.value);


function createCounter(number){
    for(i=1; i<=number; i++){
        if(i % 5 == 0 && i % 9 == 0){
            sequence[i-1] = " LuidyMoura";
        } else if(i % 5 == 0){
            sequence[i-1] = " Luidy";
        } else if(i % 9 == 0){
            sequence[i-1] = " Moura";
        } else {
            sequence[i-1] = " " + i ;
        }
    }
    answer.innerHTML = sequence;
}