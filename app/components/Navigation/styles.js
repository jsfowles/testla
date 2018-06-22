import styled, { keyframes, injectGlobal } from 'react-emotion';

export const Main = styled.div({
  position: 'absolute',
  top: 0,
  left: 20,
  width: 'calc(100% - 40px)',
  height: 52,
  zIndex: 5000,
  alignContent: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'row nowrap',
  color: 'black'
});

export const Image = styled.img({
  position: 'absolute',
  left: 0,
  width: 100,
  height: 15
});

export const Links = styled.div({
  display: 'flex',
  fontSize: 13,
  fontWeight: 400,
  textTransform: 'uppercase',

  '@media(max-width: 700px)': {
    display: 'none'
  },

  '& li': {
    margin: '0 10px'
  }
});

export const Others = styled.div({
  display: 'flex',
  position: 'absolute',
  right: 0,
  fontSize: 13,
  fontWeight: 400,
  textTransform: 'uppercase',

  '@media(max-width: 700px)': {
    display: 'none'
  },

  '& li': {
    margin: '0 10px'
  }
});
