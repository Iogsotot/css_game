// эту функцию надо запускать _после_ setLevelsName
// теория должна генерится при каждом обновлении контента - переходе уровня, выигрыше и тд
import allTheory from './theoryTemplates';

export default function createTheory(currentLevel) {
  const theoryBlock = document.querySelector('#theoryBlock');

  // const theoryTemplate = allTheory[currentLevel];
  const theoryTemplate = `
    <h3 class="theory__title">
        ${allTheory[currentLevel].title}
    </h3>
    </div>
    <div class="theory__main-text">
      ${allTheory[currentLevel].main}
    </div>
    <div class="theory__examples">
      <h4 class="examples__title">${allTheory[currentLevel].examplesTitle}</h4>
      <p>${allTheory[currentLevel].examples}</p>
    </div>
  `;
  theoryBlock.innerHTML = theoryTemplate;
}

// export { createTheory };
