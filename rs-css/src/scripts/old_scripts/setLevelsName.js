// import levelsList from './variables';

export default function setLevelsName(maxLevel, levels) {
  const levelsList = document.querySelector('#levelsList');
  levelsList.innerHTML += `
  <div class="progress-bar" id="progressBar"></div>
  `;

  const theoryBlock = document.createElement('div');
  theoryBlock.setAttribute('id', 'theoryBlock');
  theoryBlock.classList.add('theory__block', 'hide');

  levelsList.appendChild(theoryBlock);

  function createLevelItemTemplate(levelNumber) {
    const levelItemTemplate = document.createElement('li');
    // const id = `level_${levelNumber}`;
    levelItemTemplate.setAttribute('id', `level_${levelNumber}`);
    levelItemTemplate.classList.add('level__item');
    levelItemTemplate.innerHTML = `
    <span class="mark"><span class="check-mark check-mark--mini"></span></span>
    <span class="level__number">${levelNumber}</span>
    <span class="level__name">${levels[levelNumber].name}</span>
    `;
    return levelItemTemplate.outerHTML;
  }
  // по идее тут i = maxLevel, но у меня код сломался от этого, тч пока что так будет
  for (let i = 1; i < maxLevel + 1; i++) {
    levelsList.innerHTML += createLevelItemTemplate(i);
  }
  return levelsList;
}
