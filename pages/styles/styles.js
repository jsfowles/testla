import styled, { keyframes, css, injectGlobal } from 'react-emotion';

export const injectGlobalStyles = () => injectGlobal`
html, body {
  padding: 0;
  margin: 0;
  color: white;
  height: 100%;
  background: black;
  font-family: 'Gotham', Helvetica;
  font-size: 24px;
  font-weight: 300;
}

#__next {
  height: 100%;
}

img {
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)
}

@font-face {
  font-family: 'Gotham';
  src: url('/static/fonts/Gotham-Light.woff');
  src: url('/static/fonts/Gotham-Light.woff2');
  font-weight: 300;
  font-style: normal;
  font-stretch: normal
}

@font-face {
  font-family: 'Gotham';
  src: url('/static/fonts/Gotham-Medium.woff');
  src: url('/static/fonts/Gotham-Medium.woff2');
  font-weight: 500;
  font-style: normal;
  font-stretch: normal
}
`;
