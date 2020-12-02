const iconClose = document.querySelector('.icon--close');
const burgerOpen = document.querySelector('#burgerOpen');
const levelsBlock = document.querySelector('#levels');

function levelsMenuClose() {
  iconClose.classList.toggle('rotate');
  setTimeout(() => { 
    levelsBlock.classList.remove('open');
    burgerOpen.style.opacity = '1';
  }, 150);
}

function levelsMenuOpen() {
  burgerOpen.style.opacity = '0';
  levelsBlock.classList.add('open');
}

export { levelsMenuClose, levelsMenuOpen };
