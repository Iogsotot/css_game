import levelsTemplate from './levelsTemplate';
// import { levelsList } from './variables';
import createHTMLEl from './createHTMLEl';
import createTheory from './createTheory';

export default class Levels {
  constructor(maxLevel, currentLevel) {
    this.levelsList = document.querySelector('#levelsList');
    this.levelNextBtn = document.querySelector('#levelNext');
    this.levelPrevBtn = document.querySelector('#levelPrev');
    this.levelsBlock = document.querySelector('#levels');
    this.levelsIconClose = document.querySelector('#levelsCloseBtn');
    this.levelsIconClose.addEventListener('click', () => { this.levelsMenuClose(); });
    this.burgerOpen = document.querySelector('#burgerOpen');
    this.burgerOpen.addEventListener('click', () => { this.levelsMenuOpen(); });

    this.levelsTemplate = levelsTemplate;
    this.currentLevel = currentLevel;
    this.maxLevel = maxLevel;

    this.setLevelsName();
    this.setTheoryBlock(currentLevel);
    this.highlightSelectedLevel(currentLevel);
  }

  createLevelItemTemplate(levelNumber) {
    this.levelItemHTML = `
    <span class="mark"><span class="check-mark check-mark--mini"></span></span>
    <span class="level__number">${levelNumber}</span>
    <span class="level__name">${this.levelsTemplate[`level${levelNumber}`].name}</span>
    `;
    this.levelsItemTemplate = createHTMLEl('li', 'level__item', this.levelItemHTML, null, ['id', `level_${levelNumber}`]);
    return this.levelsItemTemplate.outerHTML;
  }

  setLevelsName() {
    for (let i = 1; i < this.maxLevel + 1; i++) {
      this.levelsList.innerHTML += this.createLevelItemTemplate(i);
    }
    return this.levelsList;
  }

  setTheoryBlock(currentLevel) {
    this.currentLevel = currentLevel;
    this.theoryBlock = createHTMLEl('div', 'theory__block hide', null, this.levelsList, ['id', 'theoryBlock']);
    this.theoryBlock.innerHTML = createTheory(this.currentLevel);
  }

  updateTheoryBlock(currentLevel) {
    this.currentLevel = currentLevel;
    this.theoryBlock.innerHTML = createTheory(this.currentLevel);
  }

  highlightSelectedLevel(currentLevel) {
    this.currentLevel = currentLevel;
    Array.from(this.levelsList.children).forEach((element) => {
      element.classList.remove('hover');
    });
    const levelsListItems = this.levelsList.querySelectorAll('li');
    // потому, что массив считается с 0, а уровень - с 1
    levelsListItems[this.currentLevel - 1].classList.add('hover');
  }

  changeCurrentLevelByClick(e) {
    this.levelItem = e.currentTarget;
    this.currentLevel = parseInt(this.levelItem.id.replace(/^\D+/g, ''), 10);
    // this.cheatUsed = false;
    localStorage.setItem('currentLevel', this.currentLevel);
  }

  changeCurrentLevelByBtn(direction) {
    this.direction = direction;
    if (this.direction === 'next') {
      if (this.currentLevel === this.maxLevel) {
        this.currentLevel = this.maxLevel;
      } else {
        this.currentLevel += 1;
      }
    } else if (this.direction === 'prev') {
      if (this.currentLevel === 1) {
        this.currentLevel = 1;
      } else {
        this.currentLevel -= 1;
      }
    }
    localStorage.setItem('currentLevel', this.currentLevel);
  }

  levelsMenuClose() {
    this.levelsIconClose.classList.toggle('rotate');
    const softAnimationTime = 150;
    setTimeout(() => {
      this.levelsBlock.classList.remove('open');
      this.burgerOpen.style.opacity = '1';
    }, softAnimationTime);
  }

  levelsMenuOpen() {
    this.burgerOpen.style.opacity = '0';
    this.levelsBlock.classList.add('open');
  }
}
