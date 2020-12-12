import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-lakeside-light.css';
import '../styles/style.scss';

import createHTMLEl from './createHTMLEl';
import createBaseHTML from './createBaseHTML';
import baseHTMLTemplate from './baseHTMLTemplate';
// import { levelsList, levelsCloseBtn, theoryBtn, } from './variables';
import Levels from './Levels';

class App {
  constructor(parentEl, currentLevel = 1) {
    this.parentEl = parentEl;
    this.maxLevel = 20;
    // this.currentLevel = currentLevel;
    // this.currentLevel = this.getCurrentLevel();
    this.burger = document.querySelector('#burgerOpen');

    this.init();
    this.updateContent();
    this.levels = new Levels(this.maxLevel, this.currentLevel);
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
  }

  getCurrentLevel() {
    this.currentLevelFromStorage = localStorage.getItem('currentLevel');
    return this.currentLevelFromStorage ? parseInt(this.currentLevelFromStorage, 10) : 1;
  }

  updateContent() {
    this.currentLevel = this.getCurrentLevel();
    // Levels.highlightSelectedLevel(this.currentLevel);
  }
}

const app = new App(document.querySelector('body'));
// const app2 = new App(document.querySelector('body'), 10);

// я знаю, что это всё должно жить в классах App и Levels, но я не смогла найти способ пробрасывать
// методы класса в качестве коллбэков в методы другого класса
const levelsIconClose = document.querySelector('#levelsCloseBtn');
const burgerOpen = document.querySelector('#burgerOpen');
const levelNextBtn = document.querySelector('#levelNext');
const levelPrevBtn = document.querySelector('#levelPrev');
const levelsBlock = document.querySelector('#levels');
const levelsList = document.querySelector('#levelsList');
const theoryBtn = document.querySelector('#theoryBtn');
const theoryBlock = document.querySelector('#theoryBlock');

function levelsMenuClose() {
  levelsIconClose.classList.toggle('rotate');
  const softAnimationTime = 150;
  setTimeout(() => {
    levelsBlock.classList.remove('open');
    burgerOpen.style.opacity = '1';
  }, softAnimationTime);
}

function levelsMenuOpen() {
  burgerOpen.style.opacity = '0';
  levelsBlock.classList.add('open');
}

levelsIconClose.addEventListener('click', levelsMenuClose);
burgerOpen.addEventListener('click', levelsMenuOpen);
theoryBtn.addEventListener('click', () => {
  // можно переписать на функцию с анимацией или opacity
  theoryBlock.classList.toggle('hide');
  theoryBtn.classList.toggle('turn-on');
});

levelsList.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', (e) => {
    Levels.changeCurrentLevelByClick(e);
    console.log(App.currentLevel);
    console.log( () => {this.currentLevel()});
  });
});
levelNextBtn.addEventListener('click', () => {
  Levels.changeCurrentLevelByBtn('next');
  // setContent();
  console.log(App.currentLevel);
  console.log( () => {this.currentLevel()});
});
levelPrevBtn.addEventListener('click', () => {
  Levels.changeCurrentLevelByBtn('prev');
  console.log(App.currentLevel);
  console.log( () => {this.currentLevel()});
});

window.onload = () => {
  hljs.initHighlightingOnLoad();
};
