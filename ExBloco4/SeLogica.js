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

console.log(poligrama("bbabab"))
