import hljs from 'highlight.js';

import 'highlight.js/styles/atelier-lakeside-light.css';

import '../styles/style.scss';
import createLevels from './task_template';
import { hovered, unhovered } from './setHoveredElements';
import typewriterEffect from './typewriter';
import codeColor from './codeColor';
import { levelsMenuClose, levelsMenuOpen } from './levelsMenu';
import setLevelsName from './setLevelsName';
// import { levelsList } from './variables';
import createTheory from './createTheory';

const cssInput = document.querySelector('.css-input');
const inputColor = document.querySelector('#inputColor');
const enterBtn = document.querySelector('#enter');
let guessEls;
const fileWindowEl = document.querySelector('.css-editor > .file-window');
const taskField = document.querySelector('#task');
const resetBtn = document.querySelector('#resetBtn');

const table = document.querySelector('#table');
const markup = document.querySelector('#markup');
const colorMarkup = document.querySelector('#colorMarkup');

const levelsIconClose = document.querySelector('#levels__icon--close');
const burgerOpen = document.querySelector('#burgerOpen');
const theoryBtn = document.querySelector('#theoryBtn');
const winTextCloseBtn = document.querySelector('#winText__icon--close');
const winTextEl = document.querySelector('#winText');
const overlayEl = document.querySelector('.overlay');

// level's complete constance
const statusEnum = { cheat: 0, solved: 1 };
let cheatUsed = false;

// создаём объект с данными всех уровней и их состоянием
const levels = createLevels();

let currentLevel = getCurrentLevel();
const maxLevel = 20;
const levelPrevBtn = document.querySelector('#levelPrev');
const levelNextBtn = document.querySelector('#levelNext');
const levelCurrentEls = document.querySelectorAll('.level--current');
const maxLevelEls = document.querySelectorAll('.level--total');

const levelsList = document.querySelector('#levelsList');

// всё, что связано с переключением уровня (ну кроме контента, он отдельно)
function getCurrentLevelByBtn(direction) {
  let integerLever = parseInt(currentLevel, 10);
  if (direction === 'next') {
    if (parseInt(currentLevel, 10) === maxLevel) {
      currentLevel = maxLevel;
    } else {
      integerLever += 1;
      currentLevel = integerLever;
    }
  } else if (direction === 'prev') {
    if (currentLevel === 1) {
      currentLevel = 1;
    } else {
      integerLever -= 1;
      currentLevel = integerLever;
    }
  }
  cheatUsed = false;
  localStorage.setItem('currentLevel', currentLevel);
  setContent();
  closeWinPopup();
}

function getCurrentLevelByClick(e) {
  const levelItem = e.currentTarget;
  currentLevel = levelItem.id.replace(/^\D+/g, '');
  cheatUsed = false;
  localStorage.setItem('currentLevel', currentLevel);
  setContent();
  closeWinPopup();
}

function clearState() {
  fileWindowEl.classList.remove('wrong');
  fileWindowEl.classList.remove('win');
}

function fail() {
  fileWindowEl.classList.add('wrong');
  setTimeout(clearState, 900);
}

function getCurrentLevel() {
  const currentLevelFromStorage = localStorage.getItem('currentLevel');
  return currentLevelFromStorage ? parseInt(currentLevelFromStorage, 10) : 1;
}

function getCompleteStats() {
  const completeStats = localStorage.getItem('completeStats');
  return JSON.parse(completeStats);
}

function setCompleteStats() {
  let completeStats = getCompleteStats();
  // console.log(completeStats);
  // console.log(currentLevel);
  if (cheatUsed) {
    levels[currentLevel].isComplete = statusEnum.cheat;
  } else {
    levels[currentLevel].isComplete = statusEnum.solved;
  }
  if (completeStats) {
    if (!(currentLevel in completeStats)) {
      completeStats = { ...completeStats, [currentLevel]: levels[currentLevel].isComplete };
    }
  } else {
    completeStats = { [currentLevel]: levels[currentLevel].isComplete };
  }
  localStorage.setItem('completeStats', JSON.stringify(completeStats));
}

// тут надо разобраться в зависимостях между функциями и переменными,
// а то ты постоянно ломаешь старое, добавляя новое.
function win() {
  let integerLever = parseInt(currentLevel, 10);
  setCompleteStats();
  const completeStats = getCompleteStats();
  const solvedLevels = Object.keys(completeStats).length;

  // console.log(solvedLevels, currentLevel);
  if (solvedLevels === 20) {
    if (Object.values(completeStats).includes(0)) {
      winTextEl.textContent = 'Congratulation! you win, but what did it cost?';
    } else {
      winTextEl.textContent = 'Congratulation! You are best of the best in CSS World!';
    }
  } else if (solvedLevels !== 20 && integerLever === 20) {
    winTextEl.textContent = 'Well done! but for final victory you need to pass all levels';
    levelsMenuOpen();
  } else {
    winTextEl.textContent = 'WIN!';
  }

  overlayEl.classList.add('show');
  winTextEl.classList.add('show');
  winTextCloseBtn.classList.add('show');

  updateProgressBar();
  updateMarkColor();
  setTimeout(clearState, 900);
  // console.log(currentLevel);
  integerLever += 1;
  if (currentLevel < 20) {
    currentLevel = integerLever;
  }
  setContent();
}

function makeAGuess() {
  const selector = cssInput.value;
  try {
    guessEls = table.querySelectorAll(selector); // array or null
    for (let i = 0; i < guessEls.length; i++) {
      guessEls[i].classList.add('selected');
    }
  } catch (error) {
    // console.log('invalid property in input');
  }
  return guessEls;
}

function checkAnswer() {
  // метим классом selected элементы, которые выбрал юзер
  makeAGuess();
  let result = null;
  const tableProgeny = table.querySelectorAll('*');

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
    win();
    // очищаем состояние (возможно, стоит это вынести в отдельную функцию - clearState)
    table.querySelectorAll('*').forEach((el) => el.classList.remove('selected'));
  } else if (result === false) {
    fail();
    table.querySelectorAll('*').forEach((el) => el.classList.remove('selected'));
  }
}

function addClassCorrect() {
  const correctSelector = levels[currentLevel].answer;
  const correctEls = table.querySelectorAll(correctSelector);
  for (let i = 0; i < correctEls.length; i++) {
    correctEls[i].classList.add('correct');
  }
}

function setContent() {
  table.innerHTML = levels[currentLevel].divTemplate;
  markup.innerHTML = levels[currentLevel].markupTemplate;
  colorMarkup.innerHTML = levels[currentLevel].markupTemplate;
  taskField.innerHTML = levels[currentLevel].task;
  levelCurrentEls[0].innerHTML = currentLevel;
  maxLevelEls[0].innerHTML = maxLevel;
  levelCurrentEls[1].innerHTML = currentLevel;
  maxLevelEls[1].innerHTML = maxLevel;
  createTheory(currentLevel);
  highlightSelectedLevel(levelsList, currentLevel);
  addClassCorrect();
  // подсветка кода
  codeColor(document.getElementById('colorMarkup'));
}

markup.addEventListener('mouseover', hovered);
markup.addEventListener('mouseout', unhovered);
table.addEventListener('mouseover', hovered);
table.addEventListener('mouseout', unhovered);
enterBtn.addEventListener('click', checkAnswer);
cssInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    checkAnswer();
  }
});

function showMeAnswer() {
  cheatUsed = true;
  setCompleteStats();
  cssInput.style.opacity = '1';
  inputColor.innerHTML = '';
  closeWinPopup();
  typewriterEffect('#input', `${levels[currentLevel].answer}`, 0);
  hljs.highlightBlock(inputColor);
}

// моя самописная обертка вокруг codeColor функции
function colorInput() {
  cssInput.style.opacity = '0';
  inputColor.innerHTML = '';
  inputColor.innerHTML = cssInput.value;
  // console.log(inputColor.innerHTML);
  // codeColor(document.getElementById('inputColor'), 'css');
  hljs.highlightBlock(inputColor);
}

function highlightSelectedLevel() {
  Array.from(levelsList.children).forEach((element) => {
    element.classList.remove('hover');
  });
  const levelsListItem = levelsList.querySelectorAll('li');
  levelsListItem[currentLevel - 1].classList.add('hover');
}

// возможно есть вариант переписать лисенер на перезапуск функции при каждом
// нажатии клавиши и/или каждом изменении длины .value
cssInput.addEventListener('change', colorInput);

const helpBtn = document.querySelector('#help_btn');
helpBtn.addEventListener('click', showMeAnswer);

setLevelsName(maxLevel, levels);
setContent(levelsList);
const theoryBlock = document.querySelector('#theoryBlock');

const progressBar = document.querySelector('#progressBar');
function updateProgressBar() {
  const completeStats = getCompleteStats();
  const progress = completeStats ? Object.keys(completeStats).length : 0;
  progressBar.style.width = `${progress * (100 / maxLevel)}%`;
}

function updateMarkColor() {
  const completeStats = getCompleteStats();
  if (completeStats) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(completeStats)) {
      const marks = levelsList.querySelectorAll('.check-mark--mini');
      const mark = marks[key - 1];
      if (value === 0) {
        mark.classList.add('cheat');
      } else if (value === 1) {
        mark.classList.add('solved');
      }
    }
  }
}

function resetMark() {
  const marks = levelsList.querySelectorAll('.check-mark--mini');
  marks.forEach((mark) => {
    mark.classList.remove('cheat', 'solved');
  });
}

updateMarkColor();

updateProgressBar(maxLevel);

levelsIconClose.addEventListener('click', levelsMenuClose);
burgerOpen.addEventListener('click', levelsMenuOpen);
theoryBtn.addEventListener('click', () => {
  // можно переписать на функцию с анимацией или opacity
  theoryBlock.classList.toggle('hide');
  theoryBtn.classList.toggle('turn-on');
});
levelsList.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', getCurrentLevelByClick);
});

levelNextBtn.addEventListener('click', () => {
  getCurrentLevelByBtn('next');
  setContent();
});
levelPrevBtn.addEventListener('click', () => {
  getCurrentLevelByBtn('prev');
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('completeStats');
  closeWinPopup();
  updateProgressBar();
  resetMark();
});

function closeWinPopup() {
  winTextCloseBtn.classList.toggle('rotate');
  setTimeout(() => {
    winTextEl.classList.remove('show');
    overlayEl.classList.remove('show');
    winTextCloseBtn.classList.remove('show');
  }, 150);
}

winTextCloseBtn.addEventListener('click', closeWinPopup);

window.onload = () => {
  hljs.initHighlightingOnLoad();
};
