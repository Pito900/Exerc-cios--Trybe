//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
//(Não gaste tempo pensando no texto e sim realizando o exercício)

document.getElementById("euFuturo").innerText = "Em dois anos quero ser um programador plenor na XPinc";

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';

//3. Crie uma função que mude a cor do quadrado vermelho para branco.

document.getElementsByClassName("center-content")[0].style.backgroundColor = "rgb(255,255,255)"

//4. Crie uma função que corrija o texto da tag <h1>.

document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript"

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo. toUpperCase()

let upper = document.getElementsByTagName("p")
for (let i= 0; i<upper.length;i++) {
    upper[i].innerText = upper[i].innerText.toUpperCase()
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function tagsPs (tag) {
    let eachTp = document.getElementsByTagName(tag)
    for (let i= 0; i<eachTp.length;i++) {
        console.log(eachTp[i].innerText)
    }
}
tagsPs("p")
