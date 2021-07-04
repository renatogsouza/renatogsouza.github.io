let visible = 'none';
const legal = ({target}) => {
  const superHero = document.querySelector('.super');
  if(visible === 'none') {
    visible = ''
  } else {
    visible = 'none'
  }
  // (visible === 'none' ? visible = '': visible = 'none')
  superHero.style.display = visible;
  // target.style.display='none';
};

document.querySelector('#hiden').addEventListener('click',legal)