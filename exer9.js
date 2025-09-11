// --- Registro de Despesas ---

let despesas = {}; // Objeto para armazenar as despesas

console.log("--- Registro de Despesas Pessoais ---");
console.log("Por favor, informe o valor para cada categoria. Digite 0 se não houver despesa nesta categoria.");

// Solicita o valor para cada categoria de despesas
despesas.moraria = parseFloat(prompt("Valor da Moradia (Aluguel/Prestação): R$ "));
despesas.alimentacao = parseFloat(prompt("Valor da Alimentação (Supermercado/Feira): R$ "));
despesas.transporte = parseFloat(prompt("Valor do Transporte (Combústivel/Público): R$ "));
despesas.lazer = parseFloat(prompt("Valor do Lazer (Passeios/Cinema): R$ "));
despesas.contas = parseFloat(prompt("Valor das Contas (Luz, Água, Internet, Telefone): R$ "));
despesas.educacao = parseFloat(prompt("Valor da Educação (Mensalidade/Cursos): R$ "));

console.log("\n--- Despesas Registradas ---");