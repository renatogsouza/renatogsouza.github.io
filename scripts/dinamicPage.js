const btnContato = document.querySelector('.btn-contato')
const btnHome = document.querySelector('.btn-home');

function linkContato()  {
  const telaInteira = document.querySelector('.tela-inteira');
  telaInteira.style.display = 'none'
  const telaContato = document.querySelector('.static-contato');
  telaContato.style.display = '';
}

function linkHome() {
  const telaInteira = document.querySelector('.tela-inteira');
  telaInteira.style.display = ''
  const telaContato = document.querySelector('.static-contato');
  telaContato.style.display = 'none';
}

btnContato.addEventListener('click', linkContato);
btnHome.addEventListener('click', linkHome);