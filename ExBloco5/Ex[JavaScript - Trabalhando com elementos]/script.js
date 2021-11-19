//1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let titulo = document.createElement("h1");
//let tagTitulo = document.getElementsByTagName("body")[0].appendChild(titulo); //o 0 é pq no site tem só um body
let tagTitulo = document.body.appendChild(titulo) //Só da para fazer isso com o body (em uma função n podemos mais fazer isso)
tagTitulo.className = "title "; //ainda coloquei uma classe
document.getElementsByClassName("title")[0].innerText = "Exercício 5.2 - JavaScript DOM"

//2- Adicione a tag main com a classe main-content como filho da tag body ;
let main  = document.createElement("main")
let tagMain = document.getElementsByTagName("body")[0].appendChild(main) // Aqui finalizei o processo de criar a tag main
tagMain.className = "main-content" // colocando a classe
//3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
document.getElementsByClassName("main-content")[0].appendChild(document.createElement("section")).className = "center-content"

//4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

document.getElementsByClassName("center-content")[0].appendChild(document.createElement("p")).innerText = "To conseguindo responder!!!".toUpperCase()

//5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
document.getElementsByTagName("main")[0].appendChild(document.createElement("section")).className = "left-content"

//6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
document.getElementsByTagName("main")[0].appendChild(document.createElement("section")).className = "right-content"

//7 -Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
// Esse elemento deve ser filho do section criado no passo 5;
let imagem = document.createElement("img")//.src = "https://picsum.photos/200"
document.querySelectorAll("section")[1].appendChild(imagem).src = "https://picsum.photos/200";
imagem.className = "small-image"

//8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois ,
// três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

document.querySelectorAll("section")[2].appendChild(document.createElement("ul")).className = "listaNOrdenada"
let array = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
let lista = document.getElementsByClassName("listaNOrdenada")[0]; //Com getElementByClassName temos que usar o indice para acessarmos o elemento
// let lista = document.querySelector(".listaNOrdenada"); //Com querySelector já acessamos o elemento, assim já podemos por os itens
for (let i = 0; i <array.length;i++) {
    let a = array[i];
    let item = document.createElement("li"); 
    item.innerText = a;
    item.className = "itemLista"
    lista.appendChild(item);

}

//9-Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 1; i <= 3;  i++) {
    let elementH3 = document.createElement('h3');
    elementH3.innerHTML = i+"Titulo nivel 3"; //funciona sem esse i.
    elementH3.className ="description"
    document.getElementsByTagName("main")[0].appendChild(elementH3);
  }

// document.getElementsByTagName("main")[0].appendChild(document.createElement("h3")).className = "description"
// document.getElementsByTagName("main")[0].appendChild(document.createElement("h3")).className = "description"
// document.getElementsByTagName("main")[0].appendChild(document.createElement("h3")).className = "description"

// 10- Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
document.getElementsByTagName("main")[0].removeChild(document.getElementsByClassName("left-content")[0])

//11-Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar,
// basta configurar o margin-right: auto da section ;
document.getElementsByClassName("right-content")[0].style.margin = "auto"

//12-Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

document.querySelector(".center-content").style.background = "rgb(50, 219, 50)" // lembrar que ele aceita epenas strings

//13-Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let itemLi = document.querySelectorAll(".itemLista")
//let itemLi = document.getElementsByTagName("li")
for (let i = 0; i< itemLi.length;i++) {
  if (itemLi[i].innerText === "dez"|| itemLi[i].innerText === "nove") {
    lista.removeChild(itemLi[i])
  }
}


