export default function createLevels() {
  // чтобы добавить всю эту херобору на страницу:
  // table.innerHTML = levels[1].divTemplate или markup.innerHTML = levels[1].markupTemplate

  const levels = {
    1:
    {
      level: 1,
      task: 'all glasses',
      isComplete: 'no',
      answer: 'glass',
      name: 'tag',
      theory: 'some theory 1',
      divTemplate: createHTML(1, 'real'),
      markupTemplate: createHTML(1, 'show'),
    },
    2:
    {
      level: 2,
      task: 'empty glasses',
      isComplete: 'no',
      answer: '.empty',
      name: 'class',
      theory: 'some theory 2',
      divTemplate: createHTML(2, 'real'),
      markupTemplate: createHTML(2, 'show'),
    },
    3:
    {
      level: 3,
      task: 'white and bubble vine',
      isComplete: 'no',
      answer: '.white.bubble',
      name: 'several classes',
      theory: 'some theory 3',
      divTemplate: createHTML(3, 'real'),
      markupTemplate: createHTML(3, 'show'),
    },
    4:
    {
      level: 4,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 4',
      divTemplate: createHTML(4, 'real'),
      markupTemplate: createHTML(4, 'show'),
    },
    5:
    {
      level: 5,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 5',
      divTemplate: createHTML(5, 'real'),
      markupTemplate: createHTML(5, 'show'),
    },
    6:
    {
      level: 6,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 6',
      divTemplate: createHTML(6, 'real'),
      markupTemplate: createHTML(6, 'show'),
    },
    7:
    {
      level: 7,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 7',
      divTemplate: createHTML(7, 'real'),
      markupTemplate: createHTML(7, 'show'),
    },
    8:
    {
      level: 8,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 8',
      divTemplate: createHTML(8, 'real'),
      markupTemplate: createHTML(8, 'show'),
    },
    9:
    {
      level: 9,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 9',
      divTemplate: createHTML(9, 'real'),
      markupTemplate: createHTML(9, 'show'),
    },
    10:
    {
      level: 10,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 10',
      divTemplate: createHTML(10, 'real'),
      markupTemplate: createHTML(10, 'show'),
    },
    11:
    {
      level: 11,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 11',
      divTemplate: createHTML(11, 'real'),
      markupTemplate: createHTML(11, 'show'),
    },
    12:
    {
      level: 12,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 12',
      divTemplate: createHTML(12, 'real'),
      markupTemplate: createHTML(12, 'show'),
    },
    13:
    {
      level: 13,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 13',
      divTemplate: createHTML(13, 'real'),
      markupTemplate: createHTML(13, 'show'),
    },
    14:
    {
      level: 14,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 14',
      divTemplate: createHTML(14, 'real'),
      markupTemplate: createHTML(14, 'show'),
    },
    15:
    {
      level: 15,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 15',
      divTemplate: createHTML(15, 'real'),
      markupTemplate: createHTML(15, 'show'),
    },
    16:
    {
      level: 16,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 16',
      divTemplate: createHTML(16, 'real'),
      markupTemplate: createHTML(16, 'show'),
    },
    17:
    {
      level: 17,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 17',
      divTemplate: createHTML(17, 'real'),
      markupTemplate: createHTML(17, 'show'),
    },
    18:
    {
      level: 18,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 18',
      divTemplate: createHTML(18, 'real'),
      markupTemplate: createHTML(18, 'show'),
    },
    19:
    {
      level: 19,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 19',
      divTemplate: createHTML(19, 'real'),
      markupTemplate: createHTML(19, 'show'),
    },
    20:
    {
      level: 20,
      task: '',
      isComplete: 'no',
      answer: '',
      name: 'tag',
      theory: 'some theory 20',
      divTemplate: createHTML(20, 'real'),
      markupTemplate: createHTML(20, 'show'),
    },
  };

  // eslint запутался и не понимает, что функция мне и возвращает value
  // eslint-disable-next-line consistent-return
  function createHTML(level, showOrReal) {
    let HTML;
    let markup;
    if (level === 1) {
      HTML = `
      <glass data-title="&lt;glass /&gt;"></glass>
      <glass data-title="&lt;glass /&gt;"></glass>
      <glass data-title="&lt;glass /&gt;"></glass>
      `;
      markup = `
      &lt;div class='table'&gt;
        <glass>&lt;glass /&gt;</glass>
        <glass>&lt;glass /&gt;</glass>
        <glass>&lt;glass /&gt;</glass>
      &lt;/div&gt;
      `;
    }
    if (level === 2) {
      HTML = `
      <glass data-title="&lt;glass /&gt;"></glass>
      <glass class="empty" data-title="&lt;glass class='empty' /&gt;"></glass>
      <glass data-title="&lt;glass /&gt;"></glass>
      `;
      markup = `
      &lt;div class='table'&gt;
        <glass>&lt;glass /&gt;</glass>
        <glass class="empty">&lt;glass class='empty' /&gt;</glass>
        <glass>&lt;glass /&gt;</glass>
      &lt;/div&gt;
      `;
    }
    if (level === 3) {
      HTML = `
      <vine class="white" data-title="&lt;vine class='white' /&gt;"></vine>
      <vine class="red" data-title="&lt;vine class='red' /&gt;"></vine>
      <vine class="white bubble" data-title="&lt;vine class='white bubble' /&gt;"></vine>
      `;
      markup = `
      &lt;div class='table'&gt;
        <vine class="white">&lt;vine class='white' /&gt;</vine>
        <vine class="red">&lt;vine class='red' /&gt;</vine>
        <vine class="white bubble">&lt;vine class='white bubble' /&gt;</vine>
      &lt;/div&gt;
      `;
    }
    if (level === 4) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 5) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 6) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 7) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 8) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 9) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 10) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 11) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 12) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 13) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 14) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 15) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 16) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 17) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 18) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 19) {
      HTML = `

      `;
      markup = `
      
      `;
    }
    if (level === 20) {
      HTML = `

      `;
      markup = `
      
      `;
    } else {
      // console.log('Хьюстон, у нас проблемы');
    }

    if (showOrReal === 'show') {
      return markup;
    } if (showOrReal === 'real') {
      return HTML;
    }
  }
  return levels;
}
