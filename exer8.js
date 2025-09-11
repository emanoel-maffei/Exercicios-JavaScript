// --- Registro das Despesas ---

let moradia = 1200;     // Valor do aluguel/prestação da casa
let alimentacao = 850;  // Gasto com supermercado e feira
let transporte = 300;   // Combustível, transporte público e etc.           
let lazer = 450;        // Passeios, cinema, etc.       
let contas = 600;       // Luz, água, internet, telefone
let educacao = 200;     // Mensalidade escolar, cursos

console.log("--- Despesas Familiares Registradas ---");
console.log(`Moradia: ${moradia}`);
console.log(`Alimentacao: ${alimentacao}`);
console.log(`Transporte: ${transporte}`);
console.log(`Lazer: ${lazer}`);
console.log(`Contas: ${contas}`);
console.log(`Educacao: ${educacao}`);
console.log("---------------------------------------");

// --- Cálculo do Total de Despesas ---

let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao;

console.log(`Total de Despesas: R$ ${totalDespesas}`)

// --- Cálculo de Média de Despesas

// Para cálcular a média, precisamos saber quantas "categorias" de despesas temos.
// Neste exemplo, temos 6 categorias.
let numeroDeCategorias = 6