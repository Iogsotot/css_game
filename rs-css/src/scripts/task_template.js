export default function createLevels() {
  // чтобы добавить на страницу:
  // table.innerHTML = levels[1].divTemplate или markup.innerHTML = levels[1].markupTemplate

  const levels = {
    1:
    {
      level: 1,
      task: 'all glasses',
      isComplete: false,
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
      isComplete: false,
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
      isComplete: false,
      answer: '.white.bubble',
      name: 'several classes',
      theory: 'some theory 3',
      divTemplate: createHTML(3, 'real'),
      markupTemplate: createHTML(3, 'show'),
    },
    4:
    {
      level: 4,
      task: 'oldest vine by id',
      isComplete: false,
      answer: '#y-1905',
      name: 'id',
      theory: 'some theory 4',
      divTemplate: createHTML(4, 'real'),
      markupTemplate: createHTML(4, 'show'),
    },
    5:
    {
      level: 5,
      task: 'just a first juice',
      isComplete: false,
      answer: 'juice:first-of-type',
      name: ':first-of-type',
      theory: 'some theory 5',
      divTemplate: createHTML(5, 'real'),
      markupTemplate: createHTML(5, 'show'),
    },
    6:
    {
      level: 6,
      task: 'right juice',
      isComplete: false,
      answer: 'juice:last-of-type',
      name: ':last-of-type',
      theory: 'some theory 6',
      divTemplate: createHTML(6, 'real'),
      markupTemplate: createHTML(6, 'show'),
    },
    7:
    {
      level: 7,
      task: 'dark beer',
      isComplete: false,
      answer: 'beer:nth-of-type(even)',
      name: ':nth-of-type',
      theory: 'some theory 7',
      divTemplate: createHTML(7, 'real'),
      markupTemplate: createHTML(7, 'show'),
    },
    8:
    {
      level: 8,
      task: 'all glasses without tea',
      isComplete: false,
      answer: 'glass:nth-of-type(odd)',
      name: ':nth-of-type again',
      theory: 'some theory 8',
      divTemplate: createHTML(8, 'real'),
      markupTemplate: createHTML(8, 'show'),
    },
    9:
    {
      level: 9,
      task: 'single espresso on napkin',
      isComplete: false,
      answer: 'espresso:only-child',
      name: ':only-child',
      theory: 'some theory 9',
      divTemplate: createHTML(9, 'real'),
      markupTemplate: createHTML(9, 'show'),
    },
    10:
    {
      level: 10,
      task: 'lime shot',
      isComplete: false,
      answer: 'tray:last-child',
      name: ':last-child',
      theory: 'some theory 10',
      divTemplate: createHTML(10, 'real'),
      markupTemplate: createHTML(10, 'show'),
    },
    11:
    {
      level: 11,
      task: 'all cocktails, but :not today ',
      isComplete: false,
      answer: 'cocktail:not(.today)',
      name: ':not',
      theory: 'some theory 11',
      divTemplate: createHTML(11, 'real'),
      markupTemplate: createHTML(11, 'show'),
    },
    12:
    {
      level: 12,
      task: 'alcohol',
      isComplete: false,
      answer: 'tray:only-of-type',
      name: ':only-of-type',
      theory: 'some theory 12',
      divTemplate: createHTML(12, 'real'),
      markupTemplate: createHTML(12, 'show'),
    },
    13:
    {
      level: 13,
      task: 'yours cake',
      isComplete: false,
      answer: '[for = "you"]',
      name: '[attr = value]',
      theory: 'some theory 13',
      divTemplate: createHTML(13, 'real'),
      markupTemplate: createHTML(13, 'show'),
    },
    14:
    {
      level: 14,
      task: 'water',
      isComplete: false,
      answer: '[class *= "water"]',
      name: '[attr *= value]',
      theory: 'some theory 14',
      divTemplate: createHTML(14, 'real'),
      markupTemplate: createHTML(14, 'show'),
    },
    15:
    {
      level: 15,
      task: 'vine from "top"',
      isComplete: false,
      answer: '[class |= "top"]',
      name: '[attr |= value]',
      theory: 'some theory 15',
      divTemplate: createHTML(15, 'real'),
      markupTemplate: createHTML(15, 'show'),
    },
    16:
    {
      level: 16,
      task: 'beer on napkin',
      isComplete: false,
      answer: 'napkin > beer',
      name: 'selector > selector',
      theory: 'some theory 16',
      divTemplate: createHTML(16, 'real'),
      markupTemplate: createHTML(16, 'show'),
    },
    17:
    {
      level: 17,
      task: 'coffee',
      isComplete: false,
      answer: 'tray coffee',
      name: 'selector selector',
      theory: 'some theory 17',
      divTemplate: createHTML(17, 'real'),
      markupTemplate: createHTML(17, 'show'),
    },
    18:
    {
      level: 18,
      task: 'all yours staff',
      isComplete: false,
      answer: '#yours *',
      name: '#id *',
      theory: 'some theory 18',
      divTemplate: createHTML(18, 'real'),
      markupTemplate: createHTML(18, 'show'),
    },
    19:
    {
      level: 19,
      task: 'normal glass',
      isComplete: false,
      answer: '.dirty + glass',
      name: 'selector + selector',
      theory: 'some theory 19',
      divTemplate: createHTML(19, 'real'),
      markupTemplate: createHTML(19, 'show'),
    },
    20:
    {
      level: 20,
      task: 'dark beer and coffee',
      isComplete: false,
      answer: '.brain-blowing ~ .dark',
      name: 'selector ~ selector',
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
      <vine id='y-1905' class="red"></vine>
      <vine id='y-2020' class="red"></vine>
      `;
      markup = `
      &lt;div class="table"&gt;
        <vine id="y-1905" class="red"></vine>
        <vine id="y-2020" class="red"></vine>
      &lt;/div&gt;
      `;
    }
    if (level === 5) {
      HTML = `
      <coffee class="black"></coffee>
      <juice></juice>
      <juice class="fresh"></juice>
      <beer></beer>
      `;
      markup = `
      &lt;div class="table"&gt;
        <coffee class="black"></coffee>
        <juice></juice>
        <juice class="fresh"></juice>
        <beer></beer>
       &lt;/div&gt;
      `;
    }
    if (level === 6) {
      HTML = `
      <coffee class="black"></coffee>
      <juice class="fresh"></juice>
      <beer></beer>
      <juice class="fresh"></juice>
      `;
      markup = `
      &lt;div class="table"&gt;
        <coffee class="black"></coffee>
        <juice class="fresh"></juice>
        <beer></beer>
        <juice class="fresh"></juice>
      &lt;/div&gt;
      `;
    }
    if (level === 7) {
      HTML = `
      <beer class="light"></beer>
      <beer class="dark"></beer>
      <beer class="light"></beer>
      <beer class="dark"></beer>
      `;
      markup = `
      &lt;div class="table"&gt;
        <beer class="light"></beer>
        <beer class="dark"></beer>
        <beer class="light"></beer>
        <beer class="dark"></beer>
      &lt;/div&gt;
      `;
    }
    if (level === 8) {
      HTML = `
      <glass class="empty"></glass>
      <glass class="ice-tea"></glass>
      <glass class="empty"></glass>
      <glass class="ice-tea"></glass>
      `;
      markup = `
      &lt;div class="table"&gt;
        <glass class="empty"></glass>
        <glass class="ice-tea"></glass>
        <glass class="empty"></glass>
        <glass class="ice-tea"></glass>
      &lt;/div&gt;
      `;
    }
    if (level === 9) {
      HTML = `
      <napkin class="white">
        <espresso></espresso>
      </napkin>
      <napkin class="white">
        <espresso></espresso>
        <espresso></espresso>
      </napkin>
      `;
      markup = `
      &lt;div class="table"&gt;
        <napkin class="white">
          <espresso></espresso>
        </napkin>
        <napkin class="white">
          <espresso></espresso>
          <espresso></espresso>
        </napkin>
      &lt;/div&gt;
      `;
    }
    if (level === 10) {
      HTML = `
      <tray>
        <shot class="b-52"></shot>
        <shot class="got-milk"></shot>
        <shot class="lime"></shot>
      </tray>
      `;
      markup = `
      &lt;div class="table"&gt;
        <tray>
          <shot class="b-52"></shot>
          <shot class="got-milk"></shot>
          <shot class="lime"></shot>
        </tray>
      &lt;/div&gt;
      `;
    }
    if (level === 11) {
      HTML = `
      <cocktail class="yesterday"></cocktail>
      <cocktail class="today"></cocktail>
      <cocktail class="tomorrow"></cocktail>
      `;
      markup = `
      &lt;div class="table"&gt;
        <cocktail class="yesterday"></cocktail>
        <cocktail class="today"></cocktail>
        <cocktail class="tomorrow"></cocktail>
      &lt;/div&gt;
      `;
    }
    if (level === 12) {
      HTML = `
      <tray>
        <glass class="empty"></glass>
        <glass class="ice-tea"></glass>
        <cocktail class="dream"></cocktail>
        <napkin>
          <shot class="b-52"></shot>
          <espresso></espresso>
          <espresso></espresso>
        </napkin>
      </tray>
      `;
      markup = `
      &lt;div class="table"&gt;
        <tray>
          <glass class="empty"></glass>
          <glass class="ice-tea"></glass>
          <cocktail class="dream"></cocktail>
          <napkin>
            <shot class="b-52"></shot>
            <espresso></espresso>
            <espresso></espresso>
          </napkin>
        </tray>
      &lt;/div&gt;
      `;
    }
    if (level === 13) {
      HTML = `
      <cake for='me'></cake>
      <cake for='you'></cake>
      `;
      markup = `
      &lt;div class="table"&gt;
        <cake for='me'></cake>
        <cake for='you'></cake>
      &lt;/div&gt;
      `;
    }
    if (level === 14) {
      HTML = `
      <glass class="pure-water"></glass>
      <glass class="water_with_lemon"></glass>
      <glass class="dirty"></glass>
      `;
      markup = `
      &lt;div class="table"&gt;
        <glass class="pure-water"></glass>
        <glass class="water_with_lemon"></glass>
        <glass class="dirty"></glass>
      &lt;/div&gt;
      `;
    }
    if (level === 15) {
      HTML = `
      <vine class="top-10"></vine>
      <vine class="toppest"></vine>
      <vine class="not-in-any-top"></vine>
      <vine class="top-50"></vine>
      `;
      markup = `
      &lt;div class="table"&gt;
        <vine class="top-10"></vine>
        <vine class="toppest"></vine>
        <vine class="not-in-any-top"></vine>
        <vine class="top-50"></vine>
      &lt;/div&gt;
      `;
    }
    if (level === 16) {
      HTML = `
      <beer></beer>
      <napkin>
        <beer></beer>
      </napkin>
      `;
      markup = `
      &lt;div class="table"&gt;
        <beer></beer>
        <napkin>
          <beer></beer>
        </napkin>
      &lt;/div&gt;
      `;
    }
    if (level === 17) {
      HTML = `
      <tray>
        <juice class="orange"></juice>
        <coffee></coffee>
      </tray>
      <napkin>
        <glass class="milk"></glass>
      </napkin>
      `;
      markup = `
      &lt;div class="table"&gt;
        <tray>
          <juice class="orange"></juice>
          <coffee></coffee>
        </tray>
        <napkin>
          <glass class="milk"></glass>
        </napkin>
      &lt;/div&gt;
      `;
    }
    if (level === 18) {
      HTML = `
      <tray id="yours">
        <beer></beer>
        <garlic></garlic>
        <peanut></peanut>
      </tray>
      <tray id="mine">
        <coffee></coffee>
        <cake></cake>
        <bug></bug>
      </tray>
      `;
      markup = `
      &lt;div class="table"&gt;
        <tray id="you">
          <beer></beer>
          <garlic></garlic>
          <peanut></peanut>
        </tray>
        <tray id="me">
          <coffee></coffee>
          <cake></cake>
          <bug></bug>
        </tray>
      &lt;/div&gt;
      `;
    }
    if (level === 19) {
      HTML = `
      <glass class="empty"></glass>
      <glass class="dirty"></glass>
      <glass></glass>
      <glass class="broken"></glass>
      `;
      markup = `
      &lt;div class="table"&gt;
        <glass class="empty"></glass>
        <glass class="dirty"></glass>
        <glass></glass>
        <glass class="broken"></glass>
      &lt;/div&gt;
      `;
    }
    if (level === 20) {
      HTML = `
      <shot class="white"></shot>
      <chocolate class="dark"></chocolate>
      <shot class="brain-blowing"></shot>
      <beer class="dark"></beer>
      <beer class="light"></beer>
      <coffee class="dark"></coffee>
      `;
      markup = `
      &lt;div class="table"&gt;
        <shot class="white"></shot>
        <chocolate class="dark"></chocolate>
        <shot class="brain-blowing"></shot>
        <beer class="dark"></beer>
        <beer class="light"></beer>
        <coffee class="dark"></coffee>
      &lt;/div&gt;
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
