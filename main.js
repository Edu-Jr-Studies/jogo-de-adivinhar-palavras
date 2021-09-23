let cont = document.querySelector('#containerRes');
let dica = document.querySelector('#dica');
let pontos = document.querySelector('#pontos');
cont.innerHTML = '';
dica.innerHTML = '';
pontos.innerHTML = 'Seus Pontos: ';


window.document.querySelector('body').addEventListener('keydown', (e) =>
{
    if(e.which === 13) filtro();
});

let ponto = 0;
let verifcPonto

let tamanhoBD = bancoPalavras.length
let nAleatorio = Math.floor(Math.random() * tamanhoBD)


pergunta = bancoPalavras[nAleatorio].id;
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
  let resposta = document.querySelector('#resposta').value;
  let teste = false;
  banco.filter( (v, i) => {
    if(v.toUpperCase() == resposta.toUpperCase()){
      teste = true
      verifc(v, i)
    }

  });
  if(teste){
    substitui();
  }else{
    alert("Errado!");
    document.querySelector('#resposta').value = '';
    if(ponto != 0 || ponto > 0){
      ponto = ponto - 1
      pontos.innerText = `Seus Pontos: ${ponto}`
    }else{
      ponto = 0
      pontos.innerText = `Seus Pontos: ${ponto}`
    }
  }
}


function verifc(v, i){
  arrayObj.push({
      id: i,
      l: v
  });

  ponto = ponto + 1
  pontos.innerText = `Seus Pontos: ${ponto}`

  if( ponto >= pergunta.split('').length )
  {
      dica.innerHTML = '<h1>FIM de JOGO</h1>';
  }
}


//Substitu 
function substitui(){
  let teste = subst2.split('')

  for(let i = 0; i < arrayObj.length; i++)
  {

    let res = arrayObj[i].id;
    let res2 = arrayObj[i].l;


    teste[res] = res2
    let sla = teste.join("")
    

    cont.innerHTML = ''
    cont.innerHTML = sla;
  }

  document.querySelector('#resposta').value = '';
  document.querySelector('#resposta').focus();
}