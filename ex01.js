// Concatenação de Strings:

const nome = "Cristiano"
const sobrenome = " Ronaldo"
let nomecompleto = nome + sobrenome

const resultado1 = document.getElementById('resultado1')
resultado1.innerText = nomecompleto


// Comprimento da String
// Escreva uma função que receba uma string e retorne seu comprimento.


const quantoscarac = "paralelepipedo"
const resultado2 = document.getElementById(`resultado2`)
resultado2.innerText = quantoscarac.length    // nem sabia que isso iria dar certo kkkkkkk


// Transformar em Maiúsculas
// Escreva uma função que transforme uma string em letras maiúsculas.

function paraMaiuscula(texto) {
    return texto.toLocaleUpperCase()
}

const textoOriginal = "minúsculo"
const textoMaiusculo = paraMaiuscula(textoOriginal)
resultado3.innerText = textoMaiusculo



// Transformar em Minúsculas
// Escreva uma função que transforme uma string em letras minúsculas.

function paraMinusculo (pagode) {
    return pagode.toLocaleLowerCase()
}

const textoOriginal1 = "Maiusculo"
const textoMinusculo = paraMinusculo(textoOriginal1)
resultado4.innerText = textoMinusculo

// Extrair uma Substring
// Escreva uma função que receba uma string e dois índices, e retorne a substring correspondente.

function extractsubstring(extract){
    return extract.substring()
}

const frase = "Todos sabem que o Cristiano Ronaldo é melhor que o Messi"
const extract = frase.substring(18,56)
resultado5.innerText = extract


// Buscar Caracteres
// Escreva uma função que receba uma string e um caractere, e retorne o índice da primeira ocorrência desse caractere na string. Se o caractere não for encontrado, retorne -1.

function localizarString(){
    let string = document.querySelector('#string').value
    let substring = document.querySelector('#substring').value

    let posicao = string.indexOf(substring)
    let resultado

    if(posicao === -1){
        resultado = 'achei não cria'
    } else{
        resultado = 'A posição do elemento é: ' + posicao
    }
    document.getElementById('resultado6').innerHTML = resultado
}

// Repetir String
// Escreva uma função que receba uma string e um número, e retorne a string repetida esse número de vezes.