const allTheory = {
  1: {
    title: 'X',
    main: 'What if you want to target all elements on a page, according to their type, rather than an id or classname? Keep it simple, and use a type selector. If you need to target all unordered lists, use ul {}.',
    examplesTitle: 'a {...} <br> ul {...}',
    examples: '',
  },
  2: {
    title: '.X',
    main: 'This is a class selector. The difference between ids and classes is that, with the latter, you can target multiple elements. Use classes when you want your styling to apply to a group of elements. Alternatively, use ids to find a needle in a haystack, and style only that specific element.',
    examplesTitle: '.error {...}',
    examples: '',
  },
  3: {
    title: 'Several tags',
    main: 'You can use several consecutive tags, thereby showing their nesting',
    examplesTitle: 'ul li {...}',
    examples: 'In this case we selected all li, which contains in ul tag',
  },
  4: {
    title: '#X',
    main: 'Prefixing the hash symbol to a selector allows us to target by id. This is easily the most common usage; however, be cautious when using id selectors.<br> Ask yourself: do I absolutely need to apply an id to this element in order to target it? id selectors are rigid and don\'t allow for reuse. If possible, first try to use a tag name, one of the new HTML5 elements, or even a pseudo-class.',
    examplesTitle: '#container {...}',
    examples: '',
  },
  5: {
    title: 'Pseudo-classes I',
    main: 'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). <br> Here we will talk about <b>Tree-structural pseudo-classes</b>. One of this is <code>:first-of-type</code>, which matches an element that is the first of its siblings, and also matches a certain type selector. ',
    examplesTitle: 'Examples :first-of-type',
    examples: 'If we have severals tag &lt;p&gt;, but we want select only fist of them. So, we can use <pre><code>p:first-of-type</code></pre>',
  },
  6: {
    title: 'Pseudo-classes II',
    main: 'The :last-of-type CSS pseudo-class represents the last element of its type among a group of sibling elements.',
    examplesTitle: 'X:last-of-type',
    examples: '<code>p:last-of-type {...}</code>',
  },
  7: {
    title: 'Pseudo-classes III',
    main: 'There will be times when, rather than selecting a child, you instead need to select according to the type of element. <br> Imagine markup that contains five unordered lists. If you wanted to style only the third ul, and didn\'t have a unique id to hook into, you could use the nth-of-type(n) pseudo class. In the snippet above, only the third ul will have a border around it.',
    examplesTitle: 'X:nth-of-type(odd)',
    examples: 'We can use special keyword <b>"odd"</b>, if we want to select all odd types',
  },
  8: {
    title: 'Pseudo-classes IV',
    main: 'There will be times when, rather than selecting a child, you instead need to select according to the type of element. <br> Imagine markup that contains five unordered lists. If you wanted to style only the third ul, and didn\'t have a unique id to hook into, you could use the nth-of-type(n) pseudo class. In the snippet above, only the third ul will have a border around it.',
    examplesTitle: 'X:nth-of-type(even)',
    examples: 'We can use special keyword <b>"even"</b>, if we want to select all odd types',
  },
  9: {
    title: 'Pseudo-classes V',
    main: 'The :only-child CSS pseudo-class represents an element without any siblings. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.',
    examplesTitle: ':only-child',
    examples: '<code>p:only-child { background-color: lime; }</code>',
  },
  10: {
    title: 'Pseudo-classes VI',
    main: 'The opposite of first-child, last-child will target the last item of the element\'s parent.',
    examplesTitle: 'X:last-child',
    examples: 'If we have severals tag &lt;li&gt; (inside tag &lt;ul&gt;), but we want select only last of them. So, we can use <pre><code>ul:last-child</code></pre>',
  },
  11: {
    title: 'Pseudo-classes VII',
    main: 'The negation pseudo class is particularly helpful. Let\'s say I want to select all tags, except for the one which has an any id (or something else). The snippet above will handle that task perfectly.',
    examplesTitle: 'X:not(selector)',
    examples: 'if I wanted to select every single element (not advised) except for paragraph tags, we could do: <br> *:not(p) {...}',
  },
  12: {
    title: 'Pseudo-classes VIII',
    main: 'This structural pseudo class can be used in some clever ways. It will target elements that do not have any siblings within its parent container. As an example, let\'s target all uls which have only a single list item.',
    examplesTitle: 'X:only-of-type',
    examples: 'First, ask yourself how you would accomplish this task. You could do ul li, but this would target all list items. The only solution is to use only-of-type.<br> <code>ul > li:only-of-type {...}</code>',
  },
  13: {
    title: 'Attribute selectors I',
    main: 'Matches elements with an attr attribute whose value is exactly value — the string inside the quotes.',
    examplesTitle: 'X[attr="foo"]',
    examples: 'a[href="https://example.com"]',
  },
  14: {
    title: 'Attribute selectors II',
    main: 'Substring matching selectors - These selectors allow for more advanced matching of substrings inside the value of your attribute. For example, if you had classes of box-warning and box-error and wanted to match everything that started with the string "box-", you could use [class^="box-"] to select them both (or [class|="box"] as described in section above).',
    examplesTitle: '[attr*=value]',
    examples: 'For example, <code>li[class*="box"]</code> will be matches elements with an attr attribute whose value contains value anywhere within the string.',
  },
  15: {
    title: 'Attribute selectors III',
    main: 'Matches elements with an attr attribute whose value is exactly value or begins with value immediately followed by a hyphen.',
    examplesTitle: '[attr|=value]',
    examples: '<code>div[lang|="zh"]</code>',
  },
  16: {
    title: 'X > Y',
    main: 'The difference between the standard X Y and X > Y is that the latter will only select direct children. <br> There are performance benefits in using the child combinator. In fact, it\'s recommended particularly when working with JavaScript-based CSS selector engines.',
    examplesTitle: '',
    examples: '',
  },
  17: {
    title: 'X Y - combinator Selectors',
    main: 'The next most common selector is the descendant selector. When you need to be more specific with your selectors, you use these. For example, what if, rather than targeting all anchor tags, you only need to target the anchors which are within an unordered list? This is specifically when you\'d use a descendant selector. <br>Pro-tip: If your selector looks like X Y Z A B.error, you\'re doing it wrong. Always ask yourself if it\'s absolutely necessary to apply all of that weight.',
    examplesTitle: '',
    examples: '',
  },
  18: {
    title: '#X *',
    main: 'Let\'s knock the obvious ones out, for the beginners, before we move on to the more advanced selectors.<br>The star symbol will target every single element on the page. Many developers will use this trick to zero out the margins and padding. While this is certainly fine for quick tests, I\'d advise you never to use this in production code. It adds too much weight on the browser, and is unnecessary.<br>The * can also be used with child selectors.',
    examplesTitle: '#container * {...}',
    examples: 'This will target every single element that is a child of the #container div. Again, try not to use this technique very much, if ever.',
  },
  19: {
    title: 'X + Y',
    main: 'This is referred to as an adjacent selector. It will select only the element that is immediately preceded by the former element.',
    examplesTitle: 'ul + p {...}',
    examples: 'In this case, only the first paragraph after each<code>ul</code> will have red text.',
  },
  20: {
    title: 'X ~ Y',
    main: 'This sibling combinator is similar to X + Y, but it\'s less strict. While an adjacent selector (ul + p) will only select the first element that is immediately preceded by the former selector, this one is more generalized. It will select, referring to our example above, any p elements, as long as they follow a ul.',
    examplesTitle: 'ul ~ p {...}',
    examples: '',
  },
};
export default allTheory;
