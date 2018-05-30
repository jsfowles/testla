import styled, { injectGlobal } from 'react-emotion';

export const injectGlobalStyles = () => injectGlobal`
html, body {
  padding: 0;
  margin: 0;
  color: white;
  height: 100%;
  background: black;
  font-family: 'Gotham', "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 300;
}

li {
  list-style-type: none;
  height: 100%;
}

#__next {
  height: 100%;
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

p {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 16px;
	font-style: normal;
	font-variant: normal;
	font-weight: 300;
	line-height: 20px;
}
`;
