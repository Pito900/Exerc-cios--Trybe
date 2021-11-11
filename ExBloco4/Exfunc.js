//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra) {
    let palavraInversa = "";
    for (let i= palavra.length-1; i >= 0; i--) {
        palavraInversa = palavraInversa + palavra[i];
    }
    console.log(palavraInversa)
    if (palavra === palavraInversa) {
       return (console.log(true));
    } else {
        return (console.log(false));
    }
}
palindromo("arara")

//tbm temos esse método:


//.split('') transforma uma string em um array
//.reverse('') inverte um array
// .join('')  -- junsta os elemento de um array as "" retiram qualquer separador
function palindromo(palavra) {
    let palavraInv = palavra.split('').reverse().join('');
    if (palavra === palavraInv) {
       return (console.log(true));
    } else {
        return (console.log(false));
    }
}
 palindromo('arara')

 //2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

 function mItem(array) {
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[0]) {
            maiorNumero = array[i];
        };
    };
    return (console.log(array.indexOf(maiorNumero))); // Esse indexOf é para vermos qual indice pertence o elemento q temos o array
 };

 
mItem([2, 3, 6, 7, 10, 1]);

//3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function mItem(array) {
    let menorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[0] > array[i]) {
            menorNumero = array[i];
        };
    };
    return (console.log(array.indexOf(menorNumero))); // é a mesma coisa do exercício anterior
};

mItem([2, 4, 6, 7, 10, 0, -3]);

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function mStr (array) {
    let maiorString = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > maiorString.length) { //a mesma ideia dos exercícios anteriores
            maiorString = array[i];
        };
    };
    return (console.log(maiorString));
};

mStr(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  //6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
 function SF(n) {
    let somatorio = 0;
    for (let i = 0; i <= n; i++) {
        somatorio = somatorio + i;
    }
    return (console.log(somatorio));
 }

 SF(5);

 //7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o
 //final da string word . Considere que a string ending sempre será menor que a string word .
 
 function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split(''); // transformamos a string em array
    fimPalavra = fimPalavra.split('');
    controle = true; // se o final for igual temos um true
    for (let index = 0; index < fimPalavra.length; index++) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) { //sacada da preula no indice
        controle = false;
      }
    }
    return controle;
  } //no exemplo da trybe no primeiro for ele verifica se o elemento 3 (da palavra) é igual ao indice 0 do fim da palavra. 
  // e assim or diante...Se aumento um indice for diferente a função já retorna false