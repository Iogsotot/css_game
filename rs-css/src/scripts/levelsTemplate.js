const level1 = {
  task: 'all glasses',
  isComplete: false,
  answer: 'glass',
  name: 'tag',
  theory: {
    title: 'X',
    main: 'What if you want to target all elements on a page, according to their type, rather than an id or classname? Keep it simple, and use a type selector. If you need to target all unordered lists, use ul {}.',
    examplesTitle: 'a {...} <br> ul {...}',
    examples: '',
  },
  divTemplate: `
  <glass data-title="&lt;glass /&gt;"></glass>
  <glass data-title="&lt;glass /&gt;"></glass>
  <glass data-title="&lt;glass /&gt;"></glass>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <glass>&lt;glass /&gt;</glass>
    <glass>&lt;glass /&gt;</glass>
    <glass>&lt;glass /&gt;</glass>
  &lt;/div&gt;
  `,
};

const level2 = {
  task: 'glass with milk',
  isComplete: false,
  answer: '.milk',
  name: 'class',
  theory: {
    title: '.X',
    main: 'This is a class selector. The difference between ids and classes is that, with the latter, you can target multiple elements. Use classes when you want your styling to apply to a group of elements. Alternatively, use ids to find a needle in a haystack, and style only that specific element.',
    examplesTitle: '.error {...}',
    examples: '',
  },
  divTemplate: `
  <glass data-title="&lt;glass /&gt;"></glass>
  <glass class="milk" data-title="&lt;glass class='milk' /&gt;"></glass>
  <glass data-title="&lt;glass /&gt;"></glass>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <glass>&lt;glass /&gt;</glass>
    <glass class="milk">&lt;glass class='milk' /&gt;</glass>
    <glass>&lt;glass /&gt;</glass>
  &lt;/div&gt;
  `,
};

const level3 = {
  task: 'white and bubble wine',
  isComplete: false,
  answer: '.white.bubble',
  name: 'several classes',
  theory: {
    title: 'Several tags',
    main: 'You can use several consecutive tags, thereby showing their nesting',
    examplesTitle: 'ul li {...}',
    examples: 'In this case we selected all li, which contains in ul tag',
  },
  divTemplate: `
  <wine class="white" data-title="&lt;wine class='white' /&gt;"></wine>
  <wine class="red" data-title="&lt;wine class='red' /&gt;"></wine>
  <wine class="white bubble" data-title="&lt;wine class='white bubble' /&gt;"></wine>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <wine class="white">&lt;wine class='white' /&gt;</wine>
    <wine class="red">&lt;wine class='red' /&gt;</wine>
    <wine class="white bubble">&lt;wine class='white bubble' /&gt;</wine>
  &lt;/div&gt;
  `,
};

const level4 = {
  task: 'oldest wine by id',
  isComplete: false,
  answer: '#y-1905',
  name: 'id',
  theory: {
    title: '#X',
    main: 'Prefixing the hash symbol to a selector allows us to target by id. This is easily the most common usage; however, be cautious when using id selectors.<br> Ask yourself: do I absolutely need to apply an id to this element in order to target it? id selectors are rigid and don\'t allow for reuse. If possible, first try to use a tag name, one of the new HTML5 elements, or even a pseudo-class.',
    examplesTitle: '#container {...}',
    examples: '',
  },
  divTemplate: `
  <wine id='y-1905' class='red'  data-title="&lt;wine id='y-1905' class='red' /&gt;"></wine>
  <wine id='y-2020' class='red'  data-title="&lt;wine id='y-2020' class='red' /&gt;"></wine>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <wine id='y-1905' class='red'>&lt;wine id='y-1905' class='red' /&gt;</wine>
    <wine id='y-2020' class='red'>&lt;wine id='y-2020' class='red' /&gt;</wine>
  &lt;/div&gt;
  `,
};

const level5 = {
  task: 'just a first juice',
  isComplete: false,
  answer: 'juice:first-of-type',
  name: ':first-of-type',
  theory: {
    title: 'Pseudo-classes I',
    main: 'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). <br> Here we will talk about <b>Tree-structural pseudo-classes</b>. One of this is <code>:first-of-type</code>, which matches an element that is the first of its siblings, and also matches a certain type selector. ',
    examplesTitle: 'Examples :first-of-type',
    examples: 'If we have severals tag &lt;p&gt;, but we want select only fist of them. So, we can use <pre><code>p:first-of-type</code></pre>',
  },
  divTemplate: `
  <coffee class='black'  data-title="&lt; coffee class='black'/&gt;"></coffee>
  <juice  data-title="&lt;juice /&gt;"></juice>
  <juice class='fresh'  data-title="&lt;juice class='fresh' /&gt;"></juice>
  <beer  data-title="&lt;beer /&gt;"></beer>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <coffee class='black'>&lt;coffee class='black' /&gt;</coffee>
    <juice>&lt;juice /&gt;</juice>
    <juice class='fresh'>&lt;juice class='fresh' /&gt;</juice>
    <beer>&lt;beer /&gt;</beer>
   &lt;/div&gt;
  `,
};

const level6 = {
  task: 'right juice',
  isComplete: false,
  answer: 'juice:last-of-type',
  name: ':last-of-type',
  theory: {
    title: 'Pseudo-classes II',
    main: 'The :last-of-type CSS pseudo-class represents the last element of its type among a group of sibling elements.',
    examplesTitle: 'X:last-of-type',
    examples: '<code>p:last-of-type {...}</code>',
  },
  divTemplate: `
  <coffee class='black'  data-title="&lt;coffee class='black' /&gt;"></coffee>
  <juice class='fresh'  data-title="&lt;juice class='fresh' /&gt;"></juice>
  <beer  data-title="&lt;beer /&gt;"></beer>
  <juice class='fresh'  data-title="&lt;juice class='fresh' /&gt;"></juice>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <coffee class='black'>&lt;coffee class='black' /&gt;</coffee>
    <juice class='fresh'>&lt;juice class='fresh' /&gt;</juice>
    <beer>&lt;beer /&gt;</beer>
    <juice class='fresh'>&lt;juice class='fresh' /&gt;</juice>
  &lt;/div&gt;
  `,
};

const level7 = {
  task: 'dark beer',
  isComplete: false,
  answer: 'beer:nth-of-type(even)',
  name: ':nth-of-type',
  theory: {
    title: 'Pseudo-classes III',
    main: 'There will be times when, rather than selecting a child, you instead need to select according to the type of element. <br> Imagine markup that contains five unordered lists. If you wanted to style only the third ul, and didn\'t have a unique id to hook into, you could use the nth-of-type(n) pseudo class. In the snippet above, only the third ul will have a border around it.',
    examplesTitle: 'X:nth-of-type(odd)',
    examples: 'We can use special keyword <b>"odd"</b>, if we want to select all odd types',
  },
  divTemplate: `
  <beer class='light'  data-title="&lt;beer class='light' /&gt;"></beer>
  <beer class='dark'  data-title="&lt;beer class='dark' /&gt;"></beer>
  <beer class='light'  data-title="&lt;beer class='light' /&gt;"></beer>
  <beer class='dark'  data-title="&lt;beer class='dark' /&gt;"></beer>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <beer class='light'>&lt;beer class='light' /&gt;</beer>
    <beer class='dark'>&lt;beer class='dark' /&gt;</beer>
    <beer class='light'>&lt;beer class='light' /&gt;</beer>
    <beer class='dark'>&lt;beer class='dark' /&gt;</beer>
  &lt;/div&gt;
  `,
};

const level8 = {
  task: 'all glasses without tea',
  isComplete: false,
  answer: 'glass:nth-of-type(odd)',
  name: ':nth-of-type again',
  theory: {
    title: 'Pseudo-classes IV',
    main: 'There will be times when, rather than selecting a child, you instead need to select according to the type of element. <br> Imagine markup that contains five unordered lists. If you wanted to style only the third ul, and didn\'t have a unique id to hook into, you could use the nth-of-type(n) pseudo class. In the snippet above, only the third ul will have a border around it.',
    examplesTitle: 'X:nth-of-type(even)',
    examples: 'We can use special keyword <b>"even"</b>, if we want to select all odd types',
  },
  divTemplate: `
  <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
  <glass class='ice-tea'  data-title="&lt;glass class='ice-tea' /&gt;"></glass>
  <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
  <glass class='ice-tea'  data-title="&lt;glass class='ice-tea' /&gt;"></glass>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <glass class='empty'>&lt;glass class='empty' /&gt;</glass>
    <glass class='ice-tea'>&lt;glass class='ice-tea' /&gt;</glass>
    <glass class='empty'>&lt;glass class='empty' /&gt;</glass>
    <glass class='ice-tea'>&lt;glass class='ice-tea' /&gt;</glass>
  &lt;/div&gt;
  `,
};

const level9 = {
  task: 'single espresso on napkin',
  isComplete: false,
  answer: 'espresso:only-child',
  name: ':only-child',
  theory: {
    title: 'Pseudo-classes V',
    main: 'The :only-child CSS pseudo-class represents an element without any siblings. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.',
    examplesTitle: ':only-child',
    examples: '<code>p:only-child { background-color: lime; }</code>',
  },
  divTemplate: `
  <napkin class='white' data-title="&lt;napkin &gt;&lt;napkin /&gt;">
    <espresso  data-title="&lt;espresso /&gt;"></espresso>
  </napkin>
  <napkin class='white' data-title="&lt;napkin /&gt;">
    <espresso  data-title="&lt;espresso /&gt;"></espresso>
    <espresso  data-title="&lt;espresso /&gt;"></espresso>
  </napkin>
  `,
  markupTemplate: `
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
  `,
};

const level10 = {
  task: 'lime shot',
  isComplete: false,
  answer: 'shot:last-child',
  name: ':last-child',
  theory: {
    title: 'Pseudo-classes VI',
    main: 'The opposite of first-child, last-child will target the last item of the element\'s parent.',
    examplesTitle: 'X:last-child',
    examples: 'If we have severals tag &lt;li&gt; (inside tag &lt;ul&gt;), but we want select only last of them. So, we can use <pre><code>ul:last-child</code></pre>',
  },
  divTemplate: `
  <tray data-title="&lt;tray&gt; &lt;tray /&gt;"> 
    <shot class='b-52'  data-title="&lt;shot class='b-52' /&gt;"></shot>
    <shot class='got-milk'  data-title="&lt;shot class='got-milk' /&gt;"></shot>
    <shot class='lime'  data-title="&lt;shot class='lime' /&gt;"></shot>
  </tray>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <tray>&lt;tray&gt;
      <shot class='b-52'>&lt;shot class='b-52' /&gt;</shot>
      <shot class='got-milk'>&lt;shot class='got-milk' /&gt;</shot>
      <shot class='lime'>&lt;shot class='lime' /&gt;</shot>
      &lt;/tray&gt;
    </tray>
  &lt;/div&gt;
  `,
};

const level11 = {
  task: 'all cocktails, but :not today ',
  isComplete: false,
  answer: 'cocktail:not(.today)',
  name: ':not',
  theory: {
    title: 'Pseudo-classes VII',
    main: 'The negation pseudo class is particularly helpful. Let\'s say I want to select all tags, except for the one which has an any id (or something else). The snippet above will handle that task perfectly.',
    examplesTitle: 'X:not(selector)',
    examples: 'if I wanted to select every single element (not advised) except for paragraph tags, we could do: <br> *:not(p) {...}',
  },
  divTemplate: `
  <cocktail class='yesterday'  data-title="&lt;cocktail class='yesterday' /&gt;"></cocktail>
  <cocktail class='today'  data-title="&lt;cocktail class='today' /&gt;"></cocktail>
  <cocktail class='tomorrow'  data-title="&lt;cocktail class='tomorrow' /&gt;"></cocktail>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <cocktail class='yesterday'>&lt;cocktail class='yesterday' /&gt;</cocktail>
    <cocktail class='today'>&lt;cocktail class='today' /&gt;</cocktail>
    <cocktail class='tomorrow'>&lt;cocktail class='tomorrow' /&gt;</cocktail>
  &lt;/div&gt;
  `,
};

const level12 = {
  task: 'single espresso on table',
  isComplete: false,
  answer: 'espresso:only-of-type',
  name: ':only-of-type',
  theory: {
    title: 'Pseudo-classes VIII',
    main: 'This structural pseudo class can be used in some clever ways. It will target elements that do not have any siblings within its parent container. As an example, let\'s target all uls which have only a single list item.',
    examplesTitle: 'X:only-of-type',
    examples: 'First, ask yourself how you would accomplish this task. You could do ul li, but this would target all list items. The only solution is to use only-of-type.<br> <code>ul > li:only-of-type {...}</code>',
  },
  divTemplate: `
  <glass class='empty'  data-title="&lt;glass class='empty' /&gt;"></glass>
  <glass class='ice-tea'  data-title="&lt;glass class='ice-tea' /&gt;"></glass>
  <espresso  data-title="&lt;espresso /&gt;"></espresso>
  <napkin data-title="&lt;napkin &gt; &lt;napkin /&gt;">
    <shot class='b-52'  data-title="&lt;shot class='b-52' /&gt;"></shot>
    <espresso  data-title="&lt;espresso /&gt;"></espresso>
    <espresso  data-title="&lt;espresso /&gt;"></espresso>
  </napkin>
`,
  markupTemplate: `
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
  `,
};

const level13 = {
  task: 'yours cake',
  isComplete: false,
  answer: '[for = "you"]',
  name: '[attr = value]',
  theory: {
    title: 'Attribute selectors I',
    main: 'Matches elements with an attr attribute whose value is exactly value — the string inside the quotes.',
    examplesTitle: 'X[attr="foo"]',
    examples: 'a[href="https://example.com"]',
  },
  divTemplate: `
  <cake for='me'  data-title="&lt;cake for='me' /&gt;"></cake>
  <cake for='you'  data-title="&lt;cake for='you' /&gt;"></cake>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <cake for='me'>&lt;cake for='me' /&gt;</cake>
    <cake for='you'>&lt;cake for='you' /&gt;</cake>
  &lt;/div&gt;
  `,
};

const level14 = {
  task: 'water',
  isComplete: false,
  answer: '[class *= "water"]',
  name: '[attr *= value]',
  theory: {
    title: 'Attribute selectors II',
    main: 'Substring matching selectors - These selectors allow for more advanced matching of substrings inside the value of your attribute. For example, if you had classes of box-warning and box-error and wanted to match everything that started with the string "box-", you could use [class^="box-"] to select them both (or [class|="box"] as described in section above).',
    examplesTitle: '[attr*=value]',
    examples: 'For example, <code>li[class*="box"]</code> will be matches elements with an attr attribute whose value contains value anywhere within the string.',
  },
  divTemplate: `
  <glass class='pure-water'  data-title="&lt;glass class='pure-water' /&gt;"></glass>
  <glass class='water_with_lemon'  data-title="&lt;glass class='water_with_lemon' /&gt;"></glass>
  <glass class='dirty'  data-title="&lt;glass class='dirty' /&gt;"></glass>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <glass class='pure-water'>&lt;glass class='pure-water' /&gt;</glass>
    <glass class='water_with_lemon'>&lt;glass class='water_with_lemon'  /&gt;</glass>
    <glass class='dirty'>&lt;glass class='dirty' /&gt;</glass>
  &lt;/div&gt;
  `,
};

const level15 = {
  task: 'wine from "top"',
  isComplete: false,
  answer: '[class |= "top"]',
  name: '[attr |= value]',
  theory: {
    title: 'Attribute selectors III',
    main: 'Matches elements with an attr attribute whose value is exactly value or begins with value immediately followed by a hyphen.',
    examplesTitle: '[attr|=value]',
    examples: '<code>div[lang|="zh"]</code>',
  },
  divTemplate: `
  <wine class='top-10'  data-title="&lt;wine class='top-10' /&gt;"></wine>
  <wine class='toppest'  data-title="&lt;wine class='toppest' /&gt;"></wine>
  <wine class='not-in-any-top'  data-title="&lt;wine class='not-in-any-top' /&gt;"></wine>
  <wine class='top-50'  data-title="&lt;wine class='top-50' /&gt;"></wine>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <wine class='top-10'>&lt;wine class='top-10' /&gt;</wine>
    <wine class='toppest'>&lt;wine class='toppest' /&gt;</wine>
    <wine class='not-in-any-top'>&lt;wine class='not-in-any-top' /&gt;</wine>
    <wine class='top-50'>&lt;wine class='top-50' /&gt;</wine>
  &lt;/div&gt;
  `,
};

const level16 = {
  isComplete: false,
  answer: 'napkin > beer',
  name: 'selector > selector',
  theory: {
    title: 'X > Y',
    main: 'The difference between the standard X Y and X > Y is that the latter will only select direct children. <br> There are performance benefits in using the child combinator. In fact, it\'s recommended particularly when working with JavaScript-based CSS selector engines.',
    examplesTitle: '',
    examples: '',
  },
  divTemplate: `
  <beer  data-title="&lt;beer /&gt;"></beer>
  <napkin data-title="&lt;napkin&gt; &lt;/napkin&gt;">
    <beer  data-title="&lt;beer /&gt;"></beer>
  </napkin>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <beer>&lt;beer /&gt;</beer>
    <napkin>&lt;napkin&gt;
      <beer>&lt;beer /&gt;</beer>
      &lt;/napkin&gt;
    </napkin>
  &lt;/div&gt;
  `,
};

const level17 = {
  task: 'coffee',
  isComplete: false,
  answer: 'tray coffee',
  name: 'selector selector',
  theory: {
    title: 'X Y - combinator Selectors',
    main: 'The next most common selector is the descendant selector. When you need to be more specific with your selectors, you use these. For example, what if, rather than targeting all anchor tags, you only need to target the anchors which are within an unordered list? This is specifically when you\'d use a descendant selector. <br>Pro-tip: If your selector looks like X Y Z A B.error, you\'re doing it wrong. Always ask yourself if it\'s absolutely necessary to apply all of that weight.',
    examplesTitle: '',
    examples: '',
  },
  divTemplate: `
  <tray data-title="&lt;tray&gt; &lt;/tray&gt;">
    <juice class='orange'  data-title="&lt;juice class='orange' /&gt;"></juice>
    <coffee  data-title="&lt;coffee /&gt;"></coffee>
  </tray>
  <napkin data-title="&lt;napkin&gt; &lt;/napkin&gt;">
    <glass class='milk'  data-title="&lt;glass class='milk' /&gt;"></glass>
  </napkin>
  `,
  markupTemplate: `
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
  `,
};

const level18 = {
  task: 'all yours staff',
  isComplete: false,
  answer: '#yours *',
  name: '#id *',
  theory: {
    title: '#X *',
    main: 'Let\'s knock the obvious ones out, for the beginners, before we move on to the more advanced selectors.<br>The star symbol will target every single element on the page. Many developers will use this trick to zero out the margins and padding. While this is certainly fine for quick tests, I\'d advise you never to use this in production code. It adds too much weight on the browser, and is unnecessary.<br>The * can also be used with child selectors.',
    examplesTitle: '#container * {...}',
    examples: 'This will target every single element that is a child of the #container div. Again, try not to use this technique very much, if ever.',
  },
  divTemplate: `
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
  `,
  markupTemplate: `
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
  `,
};

const level19 = {
  task: 'normal glass',
  isComplete: false,
  answer: '.dirty + glass',
  name: 'selector + selector',
  theory: {
    title: 'X + Y',
    main: 'This is referred to as an adjacent selector. It will select only the element that is immediately preceded by the former element.',
    examplesTitle: 'ul + p {...}',
    examples: 'In this case, only the first paragraph after each<code>ul</code> will have red text.',
  },
  divTemplate: `
  <glass class='nasty'  data-title="&lt;glass class='nasty' /&gt;"></glass>
  <glass class='dirty'  data-title="&lt;glass class='dirty' /&gt;"></glass>
  <glass  data-title="&lt;glass /&gt;"></glass>
  <glass class='broken'  data-title="&lt;glass class='broken' /&gt;"></glass>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <glass class='nasty'>&lt;glass class='nasty' /&gt;</glass>
    <glass class='dirty'>&lt;glass class='dirty' /&gt;</glass>
    <glass>&lt;glass /&gt;</glass>
    <glass class='broken'>&lt;glass class='broken' /&gt;</glass>
  &lt;/div&gt;
  `
  ,
};

const level20 = {
  task: 'dark beer and coffee',
  isComplete: false,
  answer: '.brain-blowing ~ .dark',
  name: 'selector ~ selector',
  theory: {
    title: 'X ~ Y',
    main: 'This sibling combinator is similar to X + Y, but it\'s less strict. While an adjacent selector (ul + p) will only select the first element that is immediately preceded by the former selector, this one is more generalized. It will select, referring to our example above, any p elements, as long as they follow a ul.',
    examplesTitle: 'ul ~ p {...}',
    examples: '',
  },
  divTemplate: `
  <shot class='white'  data-title="&lt;shot class='white' /&gt;"></shot>
  <chocolate class='dark'  data-title="&lt;chocolate class='dark' /&gt;"></chocolate>
  <shot class='brain-blowing'  data-title="&lt;shot class='brain-blowing' /&gt;"></shot>
  <beer class='dark'  data-title="&lt;beer class='dark' /&gt;"></beer>
  <beer class='light'  data-title="&lt;beer class='light' /&gt;"></beer>
  <coffee class='dark'  data-title="&lt;coffee class='dark' /&gt;"></coffee>
  `,
  markupTemplate: `
  &lt;div class='table'&gt;
    <shot class='white'>&lt;shot class='white' /&gt;</shot>
    <chocolate class='dark'>&lt;chocolate class='dark' /&gt;</chocolate>
    <shot class='brain-blowing'>&lt;shot class='brain-blowing' /&gt;</shot>
    <beer class='dark'>&lt;beer class='dark' /&gt;</beer>
    <beer class='light'>&lt;beer class='light' /&gt;</beer>
    <coffee class='dark'>&lt;coffee class='dark' /&gt;</coffee>
  &lt;/div&gt;
  `,
};

const levelsTemplate = {
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
  level11,
  level12,
  level13,
  level14,
  level15,
  level16,
  level17,
  level18,
  level19,
  level20,
};

export default levelsTemplate;
