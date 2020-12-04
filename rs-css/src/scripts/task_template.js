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
      answer: 'shot:last-child',
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
      task: 'single espresso on table',
      isComplete: false,
      answer: 'espresso:only-of-type',
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
      <vine id='y-1905' class='red'  data-title="&lt;vine id='y-1905' class='red' /&gt;"></vine>
      <vine id='y-2020' class='red'  data-title="&lt;vine id='y-2020' class='red' /&gt;"></vine>
      `;
      markup = `
      &lt;div class='table'&gt;
        <vine id='y-1905' class='red'>&lt;vine id='y-1905' class='red' /&gt;</vine>
        <vine id='y-2020' class='red'>&lt;vine id='y-2020' class='red' /&gt;</vine>
      &lt;/div&gt;
      `;
    }
    if (level === 5) {
      HTML = `
      <coffee class='black'  data-title="&lt; coffee class='black'/&gt;"></coffee>
      <juice  data-title="&lt; /&gt;">juice</juice>
      <juice class='fresh'  data-title="&lt;juice class='fresh' /&gt;"></juice>
      <beer  data-title="&lt;beer /&gt;"></beer>
      `;
      markup = `
      &lt;div class='table'&gt;
        <coffee class='black'>&lt;coffee class='black' /&gt;</coffee>
        <juice>&lt;juice /&gt;</juice>
        <juice class='fresh'>&lt;juice class='fresh' /&gt;</juice>
        <beer>&lt;beer /&gt;</beer>
       &lt;/div&gt;
      `;
    }
    if (level === 6) {
      HTML = `
      <coffee class='black'  data-title="&lt;coffee class='black' /&gt;"></coffee>
      <juice class='fresh'  data-title="&lt;juice class='fresh' /&gt;"></juice>
      <beer  data-title="&lt;beer /&gt;"></beer>
      <juice class='fresh'  data-title="&lt;juice class='fresh' /&gt;"></juice>
      `;
      markup = `
      &lt;div class='table'&gt;
        <coffee class='black'>&lt;coffee class='black' /&gt;</coffee>
        <juice class='fresh'>&lt;juice class='fresh' /&gt;</juice>
        <beer>&lt;beer /&gt;</beer>
        <juice class='fresh'>&lt;juice class='fresh' /&gt;</juice>
      &lt;/div&gt;
      `;
    }
    if (level === 7) {
      HTML = `
      <beer class='light'  data-title="&lt;beer class='light' /&gt;"></beer>
      <beer class='dark'  data-title="&lt;beer class='dark' /&gt;"></beer>
      <beer class='light'  data-title="&lt;beer class='light' /&gt;"></beer>
      <beer class='dark'  data-title="&lt;beer class='dark' /&gt;"></beer>
      `;
      markup = `
      &lt;div class='table'&gt;
        <beer class='light'>&lt;beer class='light' /&gt;</beer>
        <beer class='dark'>&lt;beer class='dark' /&gt;</beer>
        <beer class='light'>&lt;beer class='light' /&gt;</beer>
        <beer class='dark'>&lt;beer class='dark' /&gt;</beer>
      &lt;/div&gt;
      `;
    }
    if (level === 8) {
      HTML = `
      <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
      <glass class='ice-tea'  data-title="&lt;glass class='ice-tea' /&gt;"></glass>
      <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
      <glass class='ice-tea'  data-title="&lt;glass class='ice-tea' /&gt;"></glass>
      `;
      markup = `
      &lt;div class='table'&gt;
        <glass class='empty'>&lt;glass class='empty' /&gt;</glass>
        <glass class='ice-tea'>&lt;glass class='ice-tea' /&gt;</glass>
        <glass class='empty'>&lt;glass class='empty' /&gt;</glass>
        <glass class='ice-tea'>&lt;glass class='ice-tea' /&gt;</glass>
      &lt;/div&gt;
      `;
    }
    if (level === 9) {
      HTML = `
      <napkin class='white' data-title="&lt;napkin &gt;&lt;napkin /&gt;">
        <espresso  data-title="&lt;espresso /&gt;"></espresso>
      </napkin>
      <napkin class='white' data-title="&lt;napkin /&gt;">
        <espresso  data-title="&lt;espresso /&gt;"></espresso>
        <espresso  data-title="&lt;espresso /&gt;"></espresso>
      </napkin>
      `;
      markup = `
      &lt;div class='table'&gt;
        <napkin class='white'>&lt;napkin&gt;
          <espresso>&lt;espresso /&gt;</espresso>
          &lt;/napkin&gt;
        </napkin>
        <napkin class='white'> &lt;napkin&gt;
          <espresso>&lt;espresso /&gt;</espresso>
          <espresso>&lt;espresso /&gt;</espresso>
          &lt;/napkin&gt;
        </napkin>
      &lt;/div&gt;
      `;
    }
    if (level === 10) {
      HTML = `
      <tray data-title="&lt;tray&gt; &lt;tray /&gt;"> 
        <shot class='b-52'  data-title="&lt;shot class='b-52' /&gt;"></shot>
        <shot class='got-milk'  data-title="&lt;shot class='got-milk' /&gt;"></shot>
        <shot class='lime'  data-title="&lt;shot class='lime' /&gt;"></shot>
      </tray>
      `;
      markup = `
      &lt;div class='table'&gt;
        <tray>&lt;tray&gt;
          <shot class='b-52'>&lt;shot class='b-52' /&gt;</shot>
          <shot class='got-milk'>&lt;shot class='got-milk' /&gt;</shot>
          <shot class='lime'>&lt;shot class='lime' /&gt;</shot>
          &lt;/tray&gt;
        </tray>
      &lt;/div&gt;
      `;
    }
    if (level === 11) {
      HTML = `
      <cocktail class='yesterday'  data-title="&lt;cocktail class='yesterday' /&gt;"></cocktail>
      <cocktail class='today'  data-title="&lt;cocktail class='today' /&gt;"></cocktail>
      <cocktail class='tomorrow'  data-title="&lt;cocktail class='tomorrow' /&gt;"></cocktail>
      `;
      markup = `
      &lt;div class='table'&gt;
        <cocktail class='yesterday'>&lt;cocktail class='yesterday' /&gt;</cocktail>
        <cocktail class='today'>&lt;cocktail class='today' /&gt;</cocktail>
        <cocktail class='tomorrow'>&lt;cocktail class='tomorrow' /&gt;</cocktail>
      &lt;/div&gt;
      `;
    }
    if (level === 12) {
      HTML = `

        <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
        <glass class='ice-tea'  data-title="&lt;glass class='ice-tea' /&gt;"></glass>
        <espresso  data-title="&lt;espresso /&gt;"></espresso>
        <napkin data-title="&lt;napkin &gt; &lt;napkin /&gt;">
          <shot class='b-52'  data-title="&lt;shot class='b-52' /&gt;"></shot>
          <espresso  data-title="&lt;espresso /&gt;"></espresso>
          <espresso  data-title="&lt;espresso /&gt;"></espresso>
        </napkin>

      `;
      markup = `
      &lt;div class='table'&gt;

          <glass class='empty'>&lt;glass class='empty' /&gt;</glass>
          <glass class='ice-tea'>&lt;glass class='ice-tea' /&gt;</glass>
          <espresso>&lt;espresso /&gt;</espresso>
          <napkin> &lt;napkin&gt;
            <shot class='b-52'>&lt;shot class='b-52' /&gt;</shot>
            <espresso>&lt;espresso /&gt;</espresso>
            <espresso>&lt;espresso /&gt;</espresso>
            &lt;napkin /&gt;
          </napkin>
          &lt;tray /&gt;

      &lt;/div&gt;
      `;
    }
    if (level === 13) {
      HTML = `
      <cake for='me'  data-title="&lt;cake for='me' /&gt;"></cake>
      <cake for='you'  data-title="&lt;cake for='you' /&gt;"></cake>
      `;
      markup = `
      &lt;div class='table'&gt;
        <cake for='me'>&lt;cake for='me' /&gt;</cake>
        <cake for='you'>&lt;cake for='you' /&gt;</cake>
      &lt;/div&gt;
      `;
    }
    if (level === 14) {
      HTML = `
      <glass class='pure-water'  data-title="&lt;glass class='pure-water' /&gt;"></glass>
      <glass class='water_with_lemon'  data-title="&lt;glass class='water_with_lemon' /&gt;"></glass>
      <glass class='dirty'  data-title="&lt;glass class='dirty' /&gt;"></glass>
      `;
      markup = `
      &lt;div class='table'&gt;
        <glass class='pure-water'>&lt;glass class='pure-water' /&gt;</glass>
        <glass class='water_with_lemon'>&lt;glass class='water_with_lemon'  /&gt;</glass>
        <glass class='dirty'>&lt;glass class='dirty' /&gt;</glass>
      &lt;/div&gt;
      `;
    }
    if (level === 15) {
      HTML = `
      <vine class='top-10'  data-title="&lt;vine class='top-10' /&gt;"></vine>
      <vine class='toppest'  data-title="&lt;vine class='toppest' /&gt;"></vine>
      <vine class='not-in-any-top'  data-title="&lt;vine class='not-in-any-top' /&gt;"></vine>
      <vine class='top-50'  data-title="&lt;vine class='top-50' /&gt;"></vine>
      `;
      markup = `
      &lt;div class='table'&gt;
        <vine class='top-10'>&lt;vine class='top-10' /&gt;</vine>
        <vine class='toppest'>&lt;vine class='toppest' /&gt;</vine>
        <vine class='not-in-any-top'>&lt;vine class='not-in-any-top' /&gt;</vine>
        <vine class='top-50'>&lt;vine class='top-50' /&gt;</vine>
      &lt;/div&gt;
      `;
    }
    if (level === 16) {
      HTML = `
      <beer  data-title="&lt;beer /&gt;"></beer>
      <napkin data-title="&lt;napkin&gt; &lt;/napkin&gt;">
        <beer  data-title="&lt;beer /&gt;"></beer>
      </napkin>
      `;
      markup = `
      &lt;div class='table'&gt;
        <beer>&lt;beer /&gt;</beer>
        <napkin>&lt;napkin&gt;
          <beer>&lt;beer /&gt;</beer>
          &lt;/napkin&gt;
        </napkin>
      &lt;/div&gt;
      `;
    }
    if (level === 17) {
      HTML = `
      <tray data-title="&lt;tray&gt; &lt;/tray&gt;">
        <juice class='orange'  data-title="&lt;juice class='orange' /&gt;"></juice>
        <coffee  data-title="&lt;coffee /&gt;"></coffee>
      </tray>
      <napkin data-title="&lt;napkin&gt; &lt;/napkin&gt;">
        <glass class='milk'  data-title="&lt;glass class='milk' /&gt;"></glass>
      </napkin>
      `;
      markup = `
      &lt;div class='table'&gt;
        <tray>&lt;tray&gt;
          <juice class='orange'>&lt;juice class='orange' /&gt;</juice>
          <coffee>&lt;coffee /&gt;</coffee>
          &lt;/tray&gt;
        </tray>
        <napkin >&lt;napkin&gt;
          <glass class='milk'>&lt;glass class='milk' /&gt;</glass>
          &lt;/napkin&gt;
        </napkin>
      &lt;/div&gt;
      `;
    }
    if (level === 18) {
      HTML = `
      <tray id='yours' data-title="&lt;tray id='yours'&gt; &lt;/tray&gt;">
        <beer  data-title="&lt;beer /&gt;"></beer>
        <garlic  data-title="&lt;garlic /&gt;"></garlic>
        <peanut  data-title="&lt;peanut /&gt;"></peanut>
      </tray>
      <tray id='mine' data-title="&lt;tray id='mine'&gt; &lt;/tray&gt;">
        <coffee  data-title="&lt;coffee /&gt;"></coffee>
        <cake  data-title="&lt;cake /&gt;"></cake>
        <bug  data-title="&lt;bug /&gt;"></bug>
      </tray>
      `;
      markup = `
      &lt;div class='table'&gt;
        <tray id='you'>&lt;tray id='yours'&gt;
          <beer>&lt;beer /&gt;</beer>
          <garlic>&lt;garlic /&gt;</garlic>
          <peanut>&lt;peanut /&gt;</peanut>
          &lt;/tray&gt;
        </tray>
        <tray id='me'>&lt;tray id='mine'&gt;
          <coffee>&lt;coffee /&gt;</coffee>
          <cake>&lt;cake /&gt;</cake>
          <bug>&lt;bug /&gt;</bug>
          &lt;/tray&gt;
        </tray>
      &lt;/div&gt;
      `;
    }
    if (level === 19) {
      HTML = `
      <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
      <glass class='dirty'  data-title="&lt;glass class='dirty' /&gt;"></glass>
      <glass  data-title="&lt;glass /&gt;"></glass>
      <glass class='broken'  data-title="&lt;glass class='broken' /&gt;"></glass>
      `;
      markup = `
      &lt;div class='table'&gt;
        <glass class='empty'>&lt;glass class='empty' /&gt;</glass>
        <glass class='dirty'>&lt;glass class='dirty' /&gt;</glass>
        <glass>&lt;glass /&gt;</glass>
        <glass class='broken'>&lt;glass class='broken' /&gt;</glass>
      &lt;/div&gt;
      `;
    }
    if (level === 20) {
      HTML = `
      <shot class='white'  data-title="&lt;shot class='white' /&gt;"></shot>
      <chocolate class='dark'  data-title="&lt;chocolate class='dark' /&gt;"></chocolate>
      <shot class='brain-blowing'  data-title="&lt;shot class='brain-blowing' /&gt;"></shot>
      <beer class='dark'  data-title="&lt;beer class='dark' /&gt;"></beer>
      <beer class='light'  data-title="&lt;beer class='light' /&gt;"></beer>
      <coffee class='dark'  data-title="&lt;coffee class='dark' /&gt;"></coffee>
      `;
      markup = `
      &lt;div class='table'&gt;
        <shot class='white'>&lt;shot class='white' /&gt;</shot>
        <chocolate class='dark'>&lt;chocolate class='dark' /&gt;</chocolate>
        <shot class='brain-blowing'>&lt;hot class='brain-blowing' /&gt;</shot>
        <beer class='dark'>&lt;beer class='dark' /&gt;</beer>
        <beer class='light'>&lt;beer class='light' /&gt;</beer>
        <coffee class='dark'>&lt;coffee class='dark' /&gt;</coffee>
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
