const TWO_SECONDS = 2000
let currentImgIndex = 0,
  images = document.querySelectorAll('.static-slide img'),
  max = images.length;

function nextImage() {
  images[currentImgIndex].classList.remove('img-selected');
  currentImgIndex += 1
  if(currentImgIndex >= max){
    currentImgIndex = 0;
  }
  images[currentImgIndex].classList.add('img-selected');
}

function startSlide() {
  setInterval(() => {
    nextImage();
  }, TWO_SECONDS);
}

window.addEventListener('load', startSlide);