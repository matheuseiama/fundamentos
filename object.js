const prod1 = {};
prod1.nome = "Mega celular";
prod1.preco = 4999.99;
prod1["Desconto Legal"] = 0.4;

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 150.99,
    objeto: {
        nome: "Shorts Jean",
        preco: 115.99,
        objeto: {
            nome: "Tenis Esportivo",
            preco: 550.99,
        }
    }
}

prod2["Desconto Legal"] = 0.4;
console.log(prod2);
