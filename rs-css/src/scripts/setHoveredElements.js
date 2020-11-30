import { table, markup } from './app.js'
// let table = document.querySelector('#table');
// let markup = document.querySelector('#markup');

function setHoveredElements(parent, needUnhover) {
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
    // console.log(children[0].compareDocumentPosition(mirrorChildren[0]))
  } else {
    console.log('no children');
  }
}

function unhovered(e) {
  if (e.target.id == 'table' || e.target.id == 'markup') { return }
  // e.target.classList.remove('hover');
  if (e.target.parentNode.id === 'table') {
    e.target.classList.remove('hover');
    setHoveredElements(table, 'yes');
  } else if (e.target.parentNode.id === 'markup') {
    e.target.classList.remove('hover');
    setHoveredElements(markup, 'yes');
  }
}

function hovered(e) {
  if (e.target.id == 'table' || e.target.id == 'markup') { return }
  // console.log(e.target.parentNode.id)
  if (e.target.parentNode.id === 'table') {
    e.target.classList.add('hover');
    setHoveredElements(table, 'no');
  } else if (e.target.parentNode.id === 'markup') {
    e.target.classList.add('hover');
    setHoveredElements(markup, 'no');
  }
  // console.log('ты трогал меня - ' +  e.target.tagName.toLowerCase(), e.target.classList.value);
  e.target.classList.add('hover');
}

export { hovered, unhovered };