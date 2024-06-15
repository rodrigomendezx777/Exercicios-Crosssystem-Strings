function cleanString(param) { // parâmetro é uma referência! referência a que? referência a informação que é passada para a função no momento de execução da mesma
    return param.replace(/[^a-zA-Z0-9\s]/g, "").trim().toLowerCase();
}

console.log(example)
console.log(otherExample)

console.log(cleanString(example))
console.log(cleanString(otherExample))

