// import { table, markup } from './app';

function setHoveredElements(parent, parentPosition, needUnhover) {
  const table = document.querySelector('#table');
  const markup = document.querySelector('#markup');
  if (parent.hasChildNodes()) {
    const { children } = parent;
    let mirrorChildren;
    if (parent === table) {
      mirrorChildren = markup.children;
    } else if (table.contains(parent)) {
      mirrorChildren = markup.children.item(parentPosition).children;
    } else if (parent === markup) {
      mirrorChildren = table.children;
    } else if (markup.contains(parent)) {
      mirrorChildren = table.children.item(parentPosition).children;
    }
    if (needUnhover === 'yes') {
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
  } else {
    console.log('no children');
  }
}

function unhovered(e) {
  e.stopPropagation();
  if (e.target.id === 'table' || e.target.id === 'markup') { return; }
  e.target.classList.remove('hover');
  let parentPosition = 0;
  let parent = e.target.parentNode;
  while ((parent.previousSibling) != null) {
    parent = parent.previousSibling;
    if (parent.nodeType !== 3) {
      parentPosition += 1;
    }
  }
  setHoveredElements(e.target.parentNode, parentPosition, 'yes');
}

function hovered(e) {
  e.stopPropagation();
  if (e.target.id === 'table' || e.target.id === 'markup') { return; }
  e.target.classList.add('hover');
  let parentPosition = 0;
  let parent = e.target.parentNode;
  while ((parent.previousSibling) != null) {
    parent = parent.previousSibling;
    if (parent.nodeType !== 3) {
      parentPosition += 1;
    }
  }
  setHoveredElements(e.target.parentNode, parentPosition, 'no');
}

export { hovered, unhovered };
