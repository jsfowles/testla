import styled, { keyframes, injectGlobal } from 'react-emotion';

export const Btn = styled.button({
  display: 'block',
  height: 42,
  width: 197,
  borderRadius: 21,
  background: 'transparent',
  color: '#fff',
  fontFamily: 'Gotham',
  fontSize: 15,
  boxSizing: 'border-box',
  textAlign: 'center',
  border: '2.5px solid #fff',
  cursor: 'pointer',
  paddingTop: 5,

  '@media(max-width: 700px)': {
    width: 330
  },

  '&:hover': {
    background: '#fff',
    color: '#333'
  }
});
