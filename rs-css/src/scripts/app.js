import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-lakeside-light.css';
import '../styles/style.scss';

import createHTMLEl from './createHTMLEl';
import createBaseHTML from './createBaseHTML';
import baseHTMLTemplate from './baseHTMLTemplate';

class App {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.header = createBaseHTML().header;
    this.main = createBaseHTML().main;
    this.footer = createBaseHTML().footer;
    this.aside = createBaseHTML().aside;
  }

  init() {
    this.parentEl.append(this.header, this.aside, this.main, this.footer);

    // const levelsCloseBtn = document.querySelector('#levelsCloseBtn');
    // const theoryBtn = document.querySelector('#theoryBtn');
    const levelsList = createHTMLEl('ul', 'levels__list', null, this.aside, ['id', 'levelsList']);
    const resetBtn = createHTMLEl('div', 'reset-progress btn', 'reset progress', this.aside, ['id', 'resetBtn']);

    
    return this;
  }

  // add
}

const app = new App(document.querySelector('.extra-wrapper')).init();
