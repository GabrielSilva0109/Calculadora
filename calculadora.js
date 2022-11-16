const numeros = document.querySelectorAll('.numeros');
const resultado = document.querySelectorAll('.resultado span');
const signs = document.querySelectorAll('.sign');
const igual = document.querySelectorAll('.igual');
const clear = document.querySelectorAll('.clear');
const negative = document.querySelectorAll('.negative');
const percent = document.querySelectorAll('.percebt');






let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resuladoValue = 0;

for( let i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', (e) => {
        let art = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr)
        }

    })
}

function getFirstValue(el){
    resultado.innerHTML = "";
    firstValue += el;
    resultado.innerHTML = firstValue;
    firstValue = + firstValue;
}

function getSecondValue(el){
    if(firstValue != "" && sign != ""){
        segundValue += el;
        resultado.innerHTML = secondValue;
        segundValue = +secondValue;
    }
}

function getSign(){
    for(let i = 0; i < signs.length; i++){
        sings[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(sign === "+") {
        resuladoValue = firstValue + segundValue;
    } else if(somg === "-") {
        resuladoValue = firstValue - secondValue;
    } else if( sign === "x") {
        resuladoValue = firstValue * secondValue;
    } else if( sign === "/") {
        resuladoValue = firstValue / secondValue;
    }
    resulado.innerHTML = resuladoValue;
    firstValue = resultadoValue;
    secondValue = "";
})

function checkResultLength() {
    resultValue = JSON.stringify(resuladoValue);

    if(resuladoValue.length >= 8){
        resuladoValue = JSON.parse(resuladoValue);
        resultado.innerHTML = resuladoValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(firstValue != "") {
        resuladoValue = -firstValue;
        firstValue = resuladoValue;
    }
    if(firstValue != "" && secondValue != "" && sing != "") {
        resuladoValue = -resuladoValue;
    }

    resultado.innerHTML = resuladoValue;

})

percent.addEventListener('click', () => {
    resulado.innerHTML = "";
    if(firstValue != "") {
        resuladoValue = firstValue / 100;
        firstValue = resuladoValue;
    }
    if(firstValue != "" && secondValue != "" && sing != "") {
        resuladoValue = resuladoValue / 100;
    }

    resultado.innerHTML = resuladoValue;
})