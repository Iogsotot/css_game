export default class Listeners {
  // constructor() {
  // this.levelsIconClose = document.querySelector('#levelsCloseBtn');
  // this.burgerOpen = document.querySelector('#burgerOpen');
  // this.levelsBlock = document.querySelector('#levels');
  // this.levelsList = document.querySelector('#levelsList');
  // this.theoryBtn = document.querySelector('#theoryBtn');
  // this.theoryBlock = document.querySelector('#theoryBlock');
  // }

  handleEvent(e) {
    levelsIconClose.classList.toggle('rotate');
    const softAnimationTime = 150;
    setTimeout(() => {
      levelsBlock.classList.remove('open');
      burgerOpen.style.opacity = '1';
    }, softAnimationTime);
  }
}
