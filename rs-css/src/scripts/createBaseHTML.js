import createHTMLEl from './createHTMLEl';
import baseHTMLTemplate from './baseHTMLTemplate'
// createHTMLEl(el, classNames, progeny, parent, ...dataAttr)

export default function createBaseHTML() {
  // const wrapper = createHTMLEl('div', 'wrapper', null);

  const header = createHTMLEl('header', '',
    createHTMLEl('div', 'wrapper',
      [createHTMLEl('div', 'logo',
        [createHTMLEl('img', 'logo__img', null, null,
          ['src', './assets/icons/logo.png'],
          ['alt', 'CSS-bar'],
          ['width', 'auto'],
          ['height', '40']),
        createHTMLEl('p', 'logo__title', 'CSS-bar')]),
      createHTMLEl('nav', 'header__nav nav', baseHTMLTemplate.headerNav)]));
  const main = createHTMLEl('main', '', baseHTMLTemplate.main);
  const footer = createHTMLEl('footer', '', baseHTMLTemplate.footer);
  const aside = createHTMLEl('aside', 'levels open', baseHTMLTemplate.levelsTitleBlock, null, ['id', 'levels']);

  const baseHTML = {
    header, main, footer, aside,
  };
  return baseHTML;
}
