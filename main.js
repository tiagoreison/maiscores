"use strict";

const botaoTrocarCor = document.getElementById('trocar-cor');
const inputCor = document.getElementById('cor');

function trocarCor() {
    const cor = inputCor.value.trim();

    if (corValida(cor)) {
        document.documentElement.style.setProperty('--cor-fundo', cor);
    } else {
        alert(`A cor "${cor}" não é reconhecida. Tente usar um nome válido (ex: red, blue) ou código hexadecimal (ex: #ff0000).`);
    }
}

function corValida(cor) {
    
    const testElem = document.createElement("div");
    testElem.style.color = "";
    testElem.style.color = cor;

    return testElem.style.color !== "";
}

botaoTrocarCor.addEventListener('click', trocarCor);
