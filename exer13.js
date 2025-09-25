/*
    Criando um array
    Crie um novo arquivo JS e, dentro dele , elabore um exemplo simpes de array. Seu código deve fazer o seguinte:
    - Declare uma váriavel usando const ou let para armazenar uma lista que você gosta;
    - Adicione pelo menos 4 elementos a sua lista na declaração;
    - Acesse e imprima no terminal apenas o segundo elemento da sua lista;
    - Adicione um novo elemento ao final do seu array;
    - Imprima no terminal o array completo para confirmar se o novo item foi adicionado corretamente.
    - Após finalisar, execute seu código no Node.js e veja o resultado.
*/

/* parte 1/2 */
let movies = [
    "Rayman", 
    "LEGO® Jurassic World", 
    "Lego Indiana Jones: The Original Adventures", 
    "LEGO® MARVEL's Avengers"
];

/* parte 3 */
console.log("2° Elemento:", movies[1]); /* mostrando 2° elemento */

/* parte 4 */
movies.push("Minecraft"); /* incrementando um novo elemento */

/* parte 5 */ 
console.log("Array:", movies); /* mostrando o vetor */

/* parte 6 é apenas executar no terminal */