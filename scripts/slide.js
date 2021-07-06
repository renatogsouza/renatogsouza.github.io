const telaContato = document.querySelector('.static-contato');
const telaSkills = document.querySelector('.static-skills');

const FIVE_SECONDS = 5000;
let counter = 1;

function nextImage() {
  document.getElementById(`radio${counter}`).checked = true;
  counter += 1;
  if (counter >= 4) {
    counter = 1;
  }
}

function startSlide() {
  setInterval(() => {
    nextImage();
  }, FIVE_SECONDS);
}

function displays() {
    telaContato.style.display = 'none';
    telaContato.style.opacity = '0';
    telaSkills.style.display = 'none';
    telaSkills.style.opacity = '0';
}

window.addEventListener('load', () => {
  startSlide();
  displays();
});