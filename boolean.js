let isAtivo = false; 
console.log(isAtivo);

isAtivo = true; 
console.log(isAtivo);

isAtivo = 1; 
console.log(!!isAtivo);
// verdadeiros
console.log("Os verdadeiros... ");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
// falsos
console.log("Os falsos... ");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Finalizando... ");
console.log(!!("" || null || 0 || "epa" || 123 || " "));

let nome = ""
console.log(nome || "Desconhecido");
