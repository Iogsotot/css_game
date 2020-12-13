import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-lakeside-light.css';
import '../styles/style.scss';

import createHTMLEl from './createHTMLEl';
import createBaseHTML from './createBaseHTML';
// import { levelsList, levelsCloseBtn, theoryBtn, } from './variables';
import Levels from './Levels';
// import Listeners from './Listeners';
// import createTheory from './createTheory';
import codeColor from './codeColor';
import { colorInput, typewriterEffect } from './typewriter';
import { hovered, unhovered } from './setHoveredElements';
import StatsManager from './StatsManager';

class App {
  constructor(parentEl, currentLevel = 1) {
    this.parentEl = parentEl;
    this.maxLevel = 20;
    // eslint-disable-next-line max-len
    this.currentLevel = this.getCurrentLevel() ? parseInt(this.getCurrentLevel(), 10) : currentLevel;

    this.init();
    this.levels = new Levels(this.maxLevel, this.currentLevel);
    this.statsManager = new StatsManager(this.levels);
    this.updateContent(this.currentLevel);
    this.createContent(this.currentLevel);

    const theoryBtn = document.querySelector('#theoryBtn');
    const theoryBlock = document.querySelector('#theoryBlock');
    const resetBtn = document.querySelector('#resetBtn');

    theoryBtn.addEventListener('click', () => {
      // можно переписать на функцию с анимацией или opacity
      theoryBlock.classList.toggle('hide');
      theoryBtn.classList.toggle('turn-on');
    });

    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('completeStats');
      this.closeWinPopup();
      this.updateProgressBar();
      this.resetMark();
    });

    this.levels.levelsList.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', (e) => {
        this.levels.changeCurrentLevelByClick(e);
        this.updateContent();
        this.statsManager.cheatUsed = false;
      });
    });
    this.levels.levelNextBtn.addEventListener('click', () => {
      this.levels.changeCurrentLevelByBtn('next');
      this.statsManager.cheatUsed = false;
      this.updateContent();
    });
    this.levels.levelPrevBtn.addEventListener('click', () => {
      this.levels.changeCurrentLevelByBtn('prev');
      this.statsManager.cheatUsed = false;
      this.updateContent(this.currentLevel);
    });
  }

  init() {
    this.extraWrapper = createHTMLEl('div', 'extra-wrapper', null, null);

    this.header = createBaseHTML().header;
    this.main = createBaseHTML().main;
    this.footer = createBaseHTML().footer;
    this.aside = createBaseHTML().aside;

    this.extraWrapper.append(this.header, this.aside, this.main, this.footer);
    this.parentEl.append(this.extraWrapper);

    this.progressBar = createHTMLEl('div', 'progress-bar', null, null, ['id', 'progressBar']);
    this.levelsList = createHTMLEl('ul', 'levels__list', this.progressBar, this.aside, ['id', 'levelsList']);
    this.resetBtn = createHTMLEl('div', 'reset-progress btn', 'reset progress', this.aside, ['id', 'resetBtn']);

    this.table = document.querySelector('#table');
    this.markup = document.querySelector('#markup');
    this.markup.addEventListener('mouseover', hovered);
    this.markup.addEventListener('mouseout', unhovered);
    this.table.addEventListener('mouseover', hovered);
    this.table.addEventListener('mouseout', unhovered);
    this.colorMarkup = document.querySelector('#colorMarkup');
    this.fileWindowEl = document.querySelector('.css-editor > .file-window');
    this.taskField = document.querySelector('#task');
    this.levelCurrentEls = document.querySelectorAll('.level--current');
    this.maxLevelEls = document.querySelectorAll('.level--total');
    this.winTextEl = document.querySelector('#winText');
    this.winTextCloseBtn = document.querySelector('#winText__icon--close');
    this.winTextCloseBtn.addEventListener('click', () => { this.closeWinPopup(); });
    this.overlayEl = document.querySelector('.overlay');
    this.cssInput = document.querySelector('.css-input');
    this.cssInput.addEventListener('change', colorInput);
    this.inputColor = document.querySelector('#inputColor');
    this.enterBtn = document.querySelector('#enter');
    this.enterBtn.addEventListener('click', () => { this.checkAnswer(); });
    this.helpBtn = document.querySelector('#help_btn');
    this.helpBtn.addEventListener('click', () => { this.showMeAnswer(); });
    // this.progressBar = document.querySelector('#progressBar');
  }

  getCurrentLevel() {
    this.currentLevelFromStorage = localStorage.getItem('currentLevel');
    return this.currentLevelFromStorage ? parseInt(this.currentLevelFromStorage, 10) : 1;
  }

  updateContent() {
    this.currentLevel = this.getCurrentLevel();
    this.levels.updateTheoryBlock(this.currentLevel);
    this.levels.highlightSelectedLevel(this.currentLevel);
    this.updateMarkColor();

    this.updateProgressBar();
    this.createContent(this.currentLevel);
  }

  createContent(currentLevel) {
    this.currentLevel = currentLevel;
    this.path = this.levels.levelsTemplate[[`level${this.currentLevel}`]];

    this.table.innerHTML = this.path.divTemplate;
    this.markup.innerHTML = this.path.markupTemplate;
    this.colorMarkup.innerHTML = this.path.markupTemplate;
    this.taskField.innerHTML = this.path.task;
    this.levelCurrentEls[0].innerHTML = this.currentLevel;
    this.levelCurrentEls[1].innerHTML = this.currentLevel;
    this.maxLevelEls[0].innerHTML = this.maxLevel;
    this.maxLevelEls[1].innerHTML = this.maxLevel;

    this.addClassCorrect(this.currentLevel);
    codeColor(document.getElementById('colorMarkup'));
  }

  addClassCorrect(currentLevel) {
    this.currentLevel = currentLevel;
    this.path = this.levels.levelsTemplate[[`level${this.currentLevel}`]];

    this.correctSelector = this.path.answer;
    const correctEls = this.table.querySelectorAll(this.correctSelector);
    for (let i = 0; i < correctEls.length; i++) {
      correctEls[i].classList.add('correct');
    }
  }

  closeWinPopup() {
    this.winTextCloseBtn.classList.toggle('rotate');
    const self = this;
    setTimeout(() => {
      self.winTextEl.classList.remove('show');
      self.overlayEl.classList.remove('show');
      self.winTextCloseBtn.classList.remove('show');
    }, 150);
  }

  showMeAnswer() {
    this.path = this.levels.levelsTemplate[`level${this.currentLevel}`];

    this.statsManager.cheatUsed = true;
    this.statsManager.setCompleteStats(this.currentLevel);
    this.cssInput.style.opacity = '1';
    this.inputColor.innerHTML = '';
    this.closeWinPopup();
    typewriterEffect('#input', `${this.path.answer}`, 0);
    const anyContrastColor = 'rgb(219, 147, 13)';
    try {
      hljs.highlightBlock(this.inputColor);
    } catch (error) {
      this.inputColor.style.color = anyContrastColor;
    }
  }

  makeAGuess() {
    const selector = this.cssInput.value;
    let guessEls;
    try {
      guessEls = this.table.querySelectorAll(selector); // array or null
      for (let i = 0; i < guessEls.length; i++) {
        guessEls[i].classList.add('selected');
      }
    } catch (error) {
      console.log('invalid property in input');
    }
    return guessEls;
  }

  checkAnswer() {
    this.makeAGuess();
    let result = null;
    const tableProgeny = this.table.querySelectorAll('*');
    for (let j = 0; j < tableProgeny.length; j++) {
      if (tableProgeny[j].classList.contains('selected')) {
        // проверяем есть ли у детей с selected ещё и класс correct
        if (tableProgeny[j].classList.contains('correct') && (result == null || result === true)) {
          result = true;
        } else {
          result = false;
        }
      } else if (tableProgeny[j].classList.contains('correct')) {
        result = false;
      }
    }
    if (result === true) {
      this.win();
      // очищаем состояние
      this.table.querySelectorAll('*').forEach((el) => el.classList.remove('selected'));
    } else if (result === false) {
      this.fail();
      this.table.querySelectorAll('*').forEach((el) => el.classList.remove('selected'));
    }
  }

  clearState(self) {
    // совершенно бессмысленная строчка, но линтер был непреклонен.
    this.self = self;
    self.fileWindowEl.classList.remove('wrong');
    // нет прописанного класса win для fileWindowEl
    self.fileWindowEl.classList.remove('win');
  }

  fail() {
    this.fileWindowEl.classList.add('wrong');
    const self = this;
    setTimeout(self.clearState, 900, self);
  }

  win() {
    this.statsManager.setCompleteStats(this.currentLevel);
    const completeStats = this.statsManager.getCompleteStats();
    const solvedLevels = Object.keys(completeStats).length;

    if (solvedLevels === 20) {
      if (Object.values(completeStats).includes(0)) {
        this.winTextEl.textContent = 'Congratulation! you win, but what did it cost?';
      } else {
        this.winTextEl.textContent = 'Congratulation! You are best of the best in CSS World!';
      }
    } else if (solvedLevels !== 20 && this.currentLevel === 20) {
      this.winTextEl.textContent = 'Well done! but for final victory you need to pass all levels';
      this.levels.levelsMenuOpen();
    } else {
      this.winTextEl.textContent = 'WIN!';
    }
    this.overlayEl.classList.add('show');
    this.winTextEl.classList.add('show');
    this.winTextCloseBtn.classList.add('show');

    const self = this;
    setTimeout(self.clearState, 900, self);
    this.currentLevel += 1;
    if (this.currentLevel >= this.maxLevel) {
      this.currentLevel = this.maxLevel;
    }
    this.updateContent(this.currentLevel);
  }

  updateProgressBar() {
    this.progressBarEl = document.querySelector('#progressBar');

    const completeStats = this.statsManager.getCompleteStats();
    const progress = completeStats ? Object.keys(completeStats).length : 0;
    this.progressBarEl.style.width = `${progress * (100 / this.maxLevel)}%`;
  }

  updateMarkColor() {
    const completeStats = this.statsManager.getCompleteStats();
    if (completeStats) {
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(completeStats)) {
        const marks = this.levels.levelsList.querySelectorAll('.check-mark--mini');
        const mark = marks[key - 1];
        if (value === 0) {
          mark.classList.add('cheat');
        } else if (value === 1) {
          mark.classList.add('solved');
        }
      }
    }
  }

  resetMark() {
    const marks = this.levels.levelsList.querySelectorAll('.check-mark--mini');
    marks.forEach((mark) => {
      mark.classList.remove('cheat', 'solved');
    });
  }
}

const app = new App(document.querySelector('body'));
console.log(app);

window.onload = () => {
  hljs.initHighlightingOnLoad();
};
