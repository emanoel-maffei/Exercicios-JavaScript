// declarando um array com strings
const frutas = ["Maça", "Banana", "Laranja", "Uva"];

// Acessando elementos do array (a contagem começa em 0)
console.log("A primeira fruta é:", frutas[0]); // Saída: A primeira fruta é: Maçã
console.log("A terceira fruta é:", frutas[2]); // Saída: A terceira fruta é: Laranja

// Obtendo o tamanho do array
console.log("O array tem", frutas.length, "frutas."); // Saída: O array tem 4 frutas.

// Adicionando um novo elemento o final do array
frutas.push("Morango");
console.log("O array agora é:", frutas) // Saída: O array agora é: ['Maça', 'Banana', 'Laranja', 'Uva', 'Morango']

// Removendo o último elemento do array
frutas.pop();
console.log("O array após remover o último elemento:", frutas); // Saída: Saída: O array após remover o último elemento: ['Maça', 'Banana', 'Laranja', 'Uva']

// Iterando sobre o array usando um loop 'for'
console.log("\nLista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
};

// Outra forma de iterar usando 'forEach' (muito comum em JavaScript)
console.log("\nLista de frutas com forEach:")
frutas.forEach(fruta => {
    console.log(fruta);
});