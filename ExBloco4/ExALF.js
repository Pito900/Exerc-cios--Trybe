let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1--Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let number of numbers) {
//     console.log(number)
// }

/////////////////////////////////////////////////////////////////////
//2--Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let soma = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//     soma += numbers[i]
// }

// console.log(soma)maiornumero

//////////////////////////////////////////////////////////////////////
//3--Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let soma = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//     soma += numbers[i]
// }

// media = soma / numbers.length

// console.log(media)

///////////////////////////////////////////////////////////////////////

// 4--Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


// let soma = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//     soma += numbers[i]
// }

// media = soma / numbers.length

// if (media > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

////////////////////////////////////////////////////////////////////////
//5-- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maiornumero = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maiornumero) {
//         maiornumero = numbers[i];
//     }
// }

// console.log(maiornumero)

////////////////////////////////////////////////////////////////////////
//6-- Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let qnprimos = 0;

//  for (let i of numbers) {
//      if (i%2 != 0) {
//          qnprimos ++
//      }
//  }

//  if (qnprimos > 0) {
//     console.log(qnprimos)
//  } else {
//      console.log("nenhum valor ímpar encontrado")
//  }

////////////////////////////////////////////////////////////////////////
//7--Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let menornumero = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (menornumero > numbers[i]) {
//         menornumero = numbers[i];
//     }
// }

// console.log(menornumero)

//////////////////////////////////////////////////////////////////////////
//8--Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let array = []

// for (let i=1; i < 26; i++) {
//     array.push(i)
// }
//  console.log(array)


////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////BONUS////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// 1-- Ordene o array numbers em ordem crescente e imprima seus valores;
// numbers.sort( function(a,b) {
//     return a-b;
// });
// console.log(numbers); 
//A função serve para fazer uma comparação entre os 
//dois valores, a e b, assim ela vai vendo qual dos dois é maior ou menor e organizando o array, legal né?

/////////////////////////////////////////////////////////////////////////
//2-- Ordene o array numbers em ordem decrescente e imprima seus valores;
// numbers.sort( function(a,b) {
//         return b-a;
//     });
//     console.log(numbers);
//Agora ficou b-a.

//////////////////////////////////////////////////////////////////////////

//3-- A-gora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao 
//valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, 
//pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser 
//feita por 2. Faça isso utilizando o for e o método push .

// let narray = []

// for (let i =0; i < numbers.length; i++) {
//     if (isNaN(numbers[i+1])) {
//         narray.push(2*numbers[i])
//     } else {
//         narray.push(numbers[i]*numbers[i+1])
//     }
// }
// console.log(narray)