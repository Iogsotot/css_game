import levelsTemplate from './levelsTemplate';
// import { levelsList } from './variables';
import createHTMLEl from './createHTMLEl';
import createTheory from './createTheory';

export default class Levels {
  constructor(maxLevel, currentLevel) {
    this.levelsList = document.querySelector('#levelsList');
    // this.levelsTemplate = levelsTemplate;
    this.currentLevel = currentLevel;
    this.maxLevel = maxLevel;

    this.setTheoryBlock(currentLevel);
    this.setLevelsName();
    this.highlightSelectedLevel();
  }

  createLevelItemTemplate(levelNumber) {
    this.levelsTemplate = levelsTemplate;
    // Аня, запомни - порядок очень важен. Это тебе не функции, которые будут ругаться - это классы!
    this.levelItemHTML = `
    <span class="mark"><span class="check-mark check-mark--mini"></span></span>
    <span class="level__number">${levelNumber}</span>
    <span class="level__name">${this.levelsTemplate[`level${levelNumber}`].name}</span>
    `;
    this.levelsItemTemplate = createHTMLEl('li', 'level__item', this.levelItemHTML, null, ['id', `level_${levelNumber}`]);
    // console.log(this.levelsItemTemplate.outerHTML);
    return this.levelsItemTemplate.outerHTML;
  }

  setLevelsName() {
    for (let i = 1; i < this.maxLevel + 1; i++) {
      this.levelsList.innerHTML += this.createLevelItemTemplate(i);
    }
    return this.levelsList;
  }

  setTheoryBlock(currentLevel) {
    this.theoryBlock = createHTMLEl('div', 'theory__block hide', null, this.levelsList, ['id', 'theoryBlock']);
    this.theoryBlock.innerHTML = createTheory(currentLevel);
  }

  highlightSelectedLevel() {
    Array.from(this.levelsList.children).forEach((element) => {
      element.classList.remove('hover');
    });
    const levelsListItems = this.levelsList.querySelectorAll('li');
    // потому, что массив считается с 0, а уровень - с 1
    levelsListItems[this.currentLevel - 1].classList.add('hover');
  }

  static changeCurrentLevelByClick(e) {
    this.levelItem = e.currentTarget;
    this.currentLevel = parseInt(this.levelItem.id.replace(/^\D+/g, ''), 10);
    // this.cheatUsed = false;
    localStorage.setItem('currentLevel', this.currentLevel);
    // setContent();
    // closeWinPopup();
    console.log(this.currentLevel);
  }

  static changeCurrentLevelByBtn(direction) {
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
    // cheatUsed = false;
    localStorage.setItem('currentLevel', this.currentLevel);
    console.log(this.currentLevel);
    // setContent();
    // closeWinPopup();
  }
}
