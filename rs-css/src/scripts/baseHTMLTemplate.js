const headerNav = `
<nav class="header__nav nav">
<ul class="nav__list">
  <li class="nav__item">
    <div class="levels__title-block">
      Level <span class="level--current level">1</span> of
      <span class="level--total level">32</span>
      <span class="check-mark"></span>
    </div>
  </li>
  <li class="nav__item">
    <div class="levels-control">
      <a href="#" class="arrow arrow-left" id="levelPrev"></a>
      <a href="#" class="arrow arrow-right" id="levelNext"></a>
    </div>
  </li>
  <li class="nav__item">
    <a href="#" class="burger levels-list" id="burgerOpen">
      <svg class="icon burger__icon" width="34" height="30" viewBox="0 0 34 30" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <line x1="4" y1="21" x2="34" y2="21" stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" />
          <line x1="4" y1="11" x2="34" y2="11" stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" />
          <line x1="4" y1="1" x2="34" y2="1" stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" />
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="38" height="30" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </a>
  </li>
</ul>
</nav>
`;

const levelsTitleBlock = `
<div class="levels__title-block">
<div class="block__text">
  Chose a level <span class="level--current level">1</span> of
  <span class="level--total level">20</span>
</div>
<a href="#" class="level-theory" id="theoryBtn" title="open/close theory">A</a>
<svg class="icon icon--close" id="levelsCloseBtn" height="365.696pt" viewBox="0 0 365.696 365.696"
  width="365.696pt" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
</svg>
</div>
`;

const main = `<div class="wrapper">
<h2 class="order">Select <span id="task">empty glasses</span></h2>
<div class="show-box">
  <div class="table" id="table">
  </div>
  <div class="win-popup">
    <div class="win-text" id="winText">Well done! but to get the final victory you need to complete all
      levels</div>
    <div class="overlay"></div>
    <svg class="icon icon--close" id="winText__icon--close" height="365.696pt" viewBox="0 0 365.696 365.696"
      width="365.696pt" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
    </svg>
  </div>
</div>

<div class="editors">
  <div class="css-editor">
    <h3 class="title">CSS Editor</h3>
    <div class="file-window">
      <div class="line-numbers">
        1 2 3 4 5 6 7 8 9 10 11 12
      </div>
      <div id="inputColor" class="input-color"></div>
      <input type="text" class="css-input" id="input" placeholder="Type in a CSS selector"></input>
      <a href="#" class="btn btn--enter" id="enter">enter</a>
      <a href="#" class="btn--help btn" id="help_btn">Help!</a>
      <div class="task-reminder-text">
        { <br>
        /* Styles would go here. */ <br>
        } <br>
        <br>
        /* <br>
        Type a number to skip to a level. <br>
        Ex → "5" for level 5 <br>
        */
      </div>
    </div>
  </div>
  <div class="html-viewer">
    <h3 class="title">HTML Viewer</h3>
    <div class="file-window">
      <div class="line-numbers">
        1 2 3 4 5 6 7 8 9 10 11 12
      </div>
      <div id="colorMarkup"></div>
      <div class="markup" id="markup">
      </div>


    </div>
  </div>
</div>

</div>`;

const footer = `
<div class="social social-block">
<ul class="social__list">
  Share
  <li class="social__item"><a href="" class="social__link link">mail</a></li>
  <li class="social__item"><a href="" class="social__link link">Fb</a></li>
  <li class="social__item"><a href="" class="social__link link">Twitter</a></li>
</ul>
</div>
<div class="copyright">
Made by <a href="https://github.com/Iogsotot" class="copyright__link link">Anne Justus</a> for <a
  href="https://rs.school/" class="copyright__link link">RSS</a> in 2020
</div>
`;

// можно раздробить на куску, но я не вижу в этом целесообразности
const baseHTMLTemplate = {
  headerNav,
  levelsTitleBlock,
  main,
  footer,
};

export default baseHTMLTemplate;
