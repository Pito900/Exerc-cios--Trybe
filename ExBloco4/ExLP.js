//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer
//, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
// let ast = '*';
// let n = 5;
// let linha = ast.repeat(n)
// for (i = 1; i<= n; i++) {
//     console.log(linha);
// }

////////////////////////////////////////////////////////////////////////////////////
//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let ast = '*';
// let base = 5;

// for (i = 1; i<= base; i++) {
//     console.log(ast.repeat(i))
// }

/////////////////////////////////////////////////////////////////////////////////////
//3- Agora inverta o lado do triângulo.

// let ast = '*';
// let vazio = ' ';
// let base = 5;

// for (i = 1; i <= base; i++) {
//     console.log(vazio.repeat(base-i) + ast.repeat(i))
// }
// aqui vai uma segunda forma de fazer (do solution)
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;
// //o primeiro for corresponde as linhas e o segundo as colunas (cada item da linhas)
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) { 
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = ''; // aqui resetou-se o imputline
//   inputPosition -= 1; // aqui retiramos um do inputposition para que o triangulo cresça inversamente..caso contrário apareceria só a ultima coluna.


//////////////////////////////////////////////////////////////////////////////////////
//4-Depois, faça uma pirâmide com n asteriscos de base:


//OBS: vamos fazer do mesmo modo que no solution.

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };

// Com essa resposta a primeira coluna será composta só de inputline
//Assim controlR vai para 4 e a controlL cai para 2...dai vai por o primeiro asterisco no meio
//Assim controlR vai para 5 e a controlL cai para 1....assim vamos ter 3 asteriscos
//Assim vamos ter todos os asteriscos (a base da pirâmide) quando controlR for 6 e controlL  for 0
