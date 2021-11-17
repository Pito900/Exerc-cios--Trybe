//3-Contagem regressiva
function count_down(x) {
  let contReg = [];
for (let i = x; i >=0; i--){
   if (i >0){
      contReg.push(i + "...");
   } else {
      contReg.push(i + "!!!");
   }
}

return(contReg.join(''))
}
//4- soma dos multiplos de 3 e 5
function multiples_of_3_or_5(roof) {
  let soma =0;
for (let i = 0; i < roof; i++){
  if (i%3 ===0 && i%5 ===0){
      soma = soma + i;
  } else if (i%3 ===0) {
      soma = soma + i;
  } else if(i%5 === 0) {
      soma = soma + i
  }
}
return (soma)
}

//5-fibonate
function even_fibonacci_numbers(roof) {
  let seqFib = [1,2];
  for (let i = seqFib.length; i < roof ; i++){ 
      if (roof > (seqFib[i-2] + seqFib[i-1])){
          seqFib.push(seqFib[i]= seqFib[i-1] + seqFib[i-2])
      } else if( (seqFib[i] + seqFib[i-1]) > roof) {
          break;
      };
  };
  let soma =0;
  for (let k of seqFib){
      if (k%2===0){
          soma = soma +k;
      }
  }

  return (soma)
}

//6- numeros primos

function nth_prime(n) {
    let nPrimos= []
    for (let i = 1; i <= n*100; i++) {
        let b = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                b = 1;
                break;
            }
        }
        if (i > 1 && b == 0) {
            nPrimos.push(i)
        }
    }
    return (nPrimos[n-1])
}

console.log(nth_prime(13195))

//7
function largest_prime_factor(number) {
    let nPrimos= []
    for (let i = 1; i <= 10000; i++) {
        let b = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                b = 1;
                break;
            }
        }
        if (i > 1 && b == 0) {
            nPrimos.push(i)
        }
    }
    let mDivisor = nPrimos[0]
    for (let k of nPrimos){
        if ( number % k === 0 && k != number){
            mDivisor = k;
        }
    }
    return (mDivisor)
}

//10
function sum_square_difference(n) {
    let soma = 0;
    for (i=1;i<=n;i++){
        soma = soma +i;
    }
    let qSoma = soma**2;
    let sQuadrados = 0;
    for (j=1;j<=n;j++){
        sQuadrados = sQuadrados +(j**2);
    }
    return(qSoma - sQuadrados)
}

console.log(sum_square_difference(10))

//13

function digits_sum(number_s) {
    let cont = 0;
    for (let i = 0; i <= 1000; i++){
        let num = i.toString().split('');
            for (let j = 0;j < num.length;j++){
                if((parseInt(num[0]) + parseInt(num[1]) +parseInt(num[2])) === number_s){
                    cont++
                }
            }
        }
    return (cont/3)
}

//15
function poligrama(word) {
    let vetor = word.split('');
    let divisao = vetor.length/2
    let palavra1 = [];
    for (let i = 0; i <= (divisao -1); i++){
        palavra1.push(vetor[i]);
    }
    let palavra2 = [];
    for (let i = divisao; i < vetor.length; i++){
        palavra2.push(vetor[i]);
    }
    if(palavra1.sort().join('') === palavra2.sort().join('')){
        let palavra11= []
        for (let i = 0; i <= (divisao -1); i++){
            palavra11.push(vetor[i]);
        }
        return (palavra11.join(''))
    } else{
        return(" ")
    }
}