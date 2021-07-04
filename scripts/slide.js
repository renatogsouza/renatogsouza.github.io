const TWO_SECONDS = 2000
let counter = 1,

function nextImage() {
  console.log('helo');
  document.getElementById(`radio${counter}`).checked = true;
  counter += 1;
  if(counter>= 4){
    counter = 1;
  }
}

function startSlide() {
  setInterval(() => {
    nextImage();
  }, TWO_SECONDS);
}

window.addEventListener('load', startSlide);