const FIVE_SECONDS = 5000;
let counter = 1;

function nextImage() {
  document.getElementById(`radio${counter}`).checked = true;
  counter += 1;
  if(counter>= 4){
    counter = 1;
  }
}

function startSlide() {
  setInterval(() => {
    nextImage();
  }, FIVE_SECONDS);
}

function displays() {
  document.querySelector('.static-contato')
    .style.display = 'none';
  document.querySelector('.static-skills')
    .style.display = 'none';
}

window.addEventListener('load',() =>{
  startSlide();
  displays();
} );