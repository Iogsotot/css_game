const cssInput = document.querySelector('input');
const enterBtn = document.querySelector('#enter');
let guessEls;
let fileWindowEl = document.querySelector('.css-editor > .file-window');
// EnterBtn.style.border = '5px solid black'

function clearState() {
  fileWindowEl.classList.remove('wrong');
}

function fail() {
  fileWindowEl.classList.add('wrong');
  setTimeout(clearState, 900);
}

function makeAGuess() {
  // достать селектор из инпута
  // навестисть на элемент с таким селектором (если не нулл)
  // добавить элементу класс 'select'
  let selector = cssInput.value;
  try {
    guessEls = document.querySelectorAll(selector);  // array or null
  } catch (error) {
    console.log('invalid property in input');
    fail();
    
  }
  console.log(selector);
  return guessEls;
}

function checkAnswer() {
  // навестись на все элементы внутри table 
  // проверить есть ли у всех элементов с классом correct класс select
  // проверить есть ли класс correct у элементов без класс correct
  // return true / false 
  makeAGuess()
}
// если checkAnswer() return true то запускаем win()
// если checkAnswer() return false то запускаем fail()


let table = document.querySelector('#table');
let markup = document.querySelector('#markup');
// markup.style.border = "5px solid red";

// функция SelectedElement() - берет селектор, на котором мышь(тег, класс, атрибуты, порядок в родителе) 
//вставляет его в querySelector
// применять этот querySelector к table и markup одновременно
// на выбранные элементы вешает класс hover
// let selectedEl;
function SelectedElement(parent, needUnhover) {
  if(parent.hasChildNodes()) {
    let children = parent.children;
    let mirrorChildren;
    if (parent === table) {
      mirrorChildren = markup.children;
      // console.log(parent, mirrorChildren)
    } else if (parent === markup) {
      mirrorChildren = table.children;
      // console.log(parent)
    }
    if(needUnhover === 'yes') {
      for (let i = 0; i < children.length; i++) {
          mirrorChildren[i].classList.remove('hover');
      }
    } else if (needUnhover === 'no') {
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('hover')) {
          mirrorChildren[i].classList.add('hover');
        }
      }
    }
    // console.log(children);
  } else {
    console.log('no children');
  }
}

// SelectedElement(table)

markup.addEventListener('mouseover', hovered)
markup.addEventListener('mouseout', unhovered)
table.addEventListener('mouseover', hovered)
table.addEventListener('mouseout', unhovered)

function unhovered(e) {
  if (e.target.id == 'table' || e.target.id == 'markup') { return }
  // e.target.classList.remove('hover');
  if (e.target.parentNode.id === 'table') {
    e.target.classList.remove('hover');
    SelectedElement(table, 'yes');
  } else if (e.target.parentNode.id === 'markup') {
    e.target.classList.remove('hover');
    SelectedElement(markup, 'yes');
  }
}
function hovered(e) {
  if (e.target.id == 'table' || e.target.id == 'markup') { return }
  console.log(e.target.parentNode.id)
  if (e.target.parentNode.id === 'table') {
    e.target.classList.add('hover');
    SelectedElement(table, 'no');
  } else if (e.target.parentNode.id === 'markup') {
    e.target.classList.add('hover');
    SelectedElement(markup, 'no');
  }
  // console.log('ты трогал меня - ' +  e.target.tagName.toLowerCase(), e.target.classList.value);
  e.target.classList.add('hover');
}

enterBtn.addEventListener('click', checkAnswer);

