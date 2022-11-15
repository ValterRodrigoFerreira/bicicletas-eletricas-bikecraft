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
