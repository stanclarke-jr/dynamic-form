import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: radnika_next;
    src: url('/Poppins-Regular.ttf');
    format: ('ttf');
    font-weight: normal;
    font-style: normal;
  }

/* -----
  Josh W. Comeau's custom CSS reset
  https://www.joshwcomeau.com/css/custom-css-reset/
----- */

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html {
  --black: #393939;
  --grey: #3a3a3a;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: #ededed;
  --minWidth: 320px;
}
html, body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-family: radnika_next, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
`; // Change default Department here
