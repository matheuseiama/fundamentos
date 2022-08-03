// funcao sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(16, 24);
imprimirSoma(2);
imprimirSoma(16, 24, 4, 5, 6, 2, 5);
imprimirSoma(); // exemplos

// funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(16, 24))
console.log(soma(16))
console.log(soma())
console.log(soma(2))