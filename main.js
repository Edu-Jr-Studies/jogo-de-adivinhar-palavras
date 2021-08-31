let cont = document.querySelector('#containerRes');
let dica = document.querySelector('#dica');
cont.innerHTML = '';
dica.innerHTML = '';


window.document.querySelector('body').addEventListener('keydown', (e) =>
{
    if(e.which === 13) filtro();
});


let tamanhoBD = bancoPalavras.length
let nAleatorio = Math.floor(Math.random() * tamanhoBD)


let pergunta = bancoPalavras[nAleatorio].id;
pergunta.trim();

let perg = pergunta;

let subst1 = perg.replace(/\s/g, ',');
perg = subst1
let subst2 = perg.replace(/[A-Z]/gi, '-');

let banco = pergunta.split('');
let arrayObj = [];

cont.innerHTML = subst2;
dica.innerHTML = bancoPalavras[nAleatorio].dica;


// Filtro
function filtro(){
  banco.filter( (v, i) => {
    let resposta = document.querySelector('#resposta').value;

    if(v.toUpperCase() == resposta.toUpperCase()){
      // arrayObj.push({[i]:v})
      arrayObj.push(
      {
        id: i,
        l: v
      });
    };
  });

  substitui();
}


//Substitu 
function substitui(){
  //Campo de variáveis:
  let teste = subst2.split('')

  for(let i = 0; i < arrayObj.length; i++)
  {
    //pegar o valor a ser alterado
    let res = arrayObj[i].id;
    let res2 = arrayObj[i].l;

    //Alterar o valor que tem na mascara com o id do nosso ArrayObj
    teste[res] = res2
    let sla = teste.join("")
    
    //-> ultima parte: Fazer com que ele seja renderizado na tela
    cont.innerHTML = ''
    cont.innerHTML = sla;
  }

  document.querySelector('#resposta').value = '';
  document.querySelector('#resposta').focus();
}