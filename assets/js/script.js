//Ativar links do menu//
const links = document.querySelectorAll(".header__menu--list a");

function ativarlinks(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlinks);

//Ativar links dos orçamentos//

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProdutos);

//Perguntas Frequentes//

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");

  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

//Galeria de bicicletas//

const galeria = document.querySelectorAll(".bike__bicicleta-imagem img");

const galeriaContainer = document.querySelector(".bike__bicicleta-imagem");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 936px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
