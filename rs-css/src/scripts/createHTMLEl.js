/* @param {String} el             */
/* @param {String} classNames     */
/* @param {HTMLElement} progeny  */
/* @param {HTMLElement} parent   */
/* @param {...array} dataAttr   */

export default function createHTMLEl(el, classNames, progeny, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('не получилось сделать новый элемент');
  }

  /* высыпаем массив: превращаем строки в массив, ... -spread operator  */
  if (classNames) element.classList.add(...classNames.split(' ')); // если пришло !undefined

  if (progeny && Array.isArray(progeny)) {
    progeny.forEach((progenyElement) => progenyElement && element.appendChild(progenyElement));
  } else if (progeny && typeof progeny === 'object') {
    element.appendChild(progeny);
  } else if (progeny && typeof progeny === 'string') {
    element.innerHTML = progeny;
  }

  if (parent) {
    parent.appendChild(element);
  }

  // проверяем ...dataAttr.
  // dataAttr - двумерный массив: [['attrName', 'attrValue'], ['attrName', 'attrValue']]
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => { // деструктуризация(ES6+)
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }
      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|alt|width|height|src|viewBox/)) {
        element.setAttribute(attrName, attrValue);
      } else { // если мы сюда упали, значит пришёл data-attr
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}
