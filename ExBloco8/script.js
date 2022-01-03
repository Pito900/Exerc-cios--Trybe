//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
//A sua função deve receber como parâmetro o nome completo da pessoa// funcionária e a partir dele gerar automaticamente um 
//email no formato nome_da_pessoa@trybe.com .
const employed = (nomeCompleto) => {
    const email = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`;;
    return {nomeCompleto, email};
} 

const newEmployees = () => {
    const employees = {
      id1: employed('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employed('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employed('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees())

  //2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo 
  //como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua 
  //HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


      const valorChutado = (valor, callback) => {
        const numAleatorio = (max, min) => { 
        Math.floor((Math.random() *(max-min)) + min)
        }
        numAleatorio(5,1)
        if (valor === numAleatorio) {
            return ('Parabéns você ganhou')
        } 
        return ('Tente novamente') }
      

      console.log(valorChutado(2))
//Resposta que achei muito legal 
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';// A forma temerária de fazer if e else.
};

console.log(lotteryResult(2, numberChecker));

//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
//o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma 
//função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
//Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver 
//resposta ("N.A") não altera-se a contagem.
const contagem = (gabarito, respostas) => {
    let nota = 0
    for (i=0;i <= gabarito.length; i++) {
        if(respostas[i] === 'N.A'){
            continue
        }
        if (gabarito[i] === respostas[i]) {
            nota++
        } else {
            nota = nota - 0.5
        }
    }
    return nota
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notas = (gabarito, respostas, callback) => {
    return callback(gabarito, respostas)
}

console.log(notas(RIGHT_ANSWERS,STUDENT_ANSWERS, contagem))

  