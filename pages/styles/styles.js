import styled, { keyframes, css, injectGlobal } from 'react-emotion';

export const injectGlobalStyles = () => injectGlobal`
html, body {
  padding: 0;
  margin: 0;
  background: black;
  color: white;
  min-height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
}
`;
