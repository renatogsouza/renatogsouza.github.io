const btnContato = document.querySelector('.btn-contato');
const btnHome = document.querySelector('.btn-home');

function linkContato() {
  const telaInteira = document.querySelector('.tela-inteira');
  telaInteira.style.display = 'none';
  telaInteira.style.opacity = '1';
  const telaContato = document.querySelector('.static-contato');
  telaContato.style.display = '';
  telaContato.style.opacity = '1';
}

function linkHome() {
  const telaInteira = document.querySelector('.tela-inteira');
  telaInteira.style.display = '';
  const telaContato = document.querySelector('.static-contato');
  telaContato.style.display = 'none';
}

btnContato.addEventListener('click', linkContato);
btnHome.addEventListener('click', linkHome);