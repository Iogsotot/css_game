import levelsTemplate from './levelsTemplate';

export default function createTheory(currentLevel) {
  // const theoryBlock = document.querySelector('#theoryBlock');

  // const theoryTemplate = allTheory[currentLevel];
  const { theory } = levelsTemplate[`level${currentLevel}`];
  const theoryTemplate = `
    <h3 class="theory__title">
        ${theory.title}
    </h3>
    </div>
    <div class="theory__main-text">
      ${theory.main}
    </div>
    <div class="theory__examples">
      <h4 class="examples__title">${theory.examplesTitle}</h4>
      <p>${theory.examples}</p>
    </div>
  `;
  return theoryTemplate;
  // theoryBlock.innerHTML = theoryTemplate;
}
