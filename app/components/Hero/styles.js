import styled, { keyframes, injectGlobal } from 'react-emotion';

export const Main = styled.div({
  height: '100%',
  width: '100%',
  position: 'relative'
});

export const Background = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',

  '@media(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
    backgroundImage: 'url("../static/images/hero@2.jpg")'
  },

  '@media(max-aspect-ratio: 1/1)': {
    backgroundImage: 'url("../static/images/hero-portrait@2.jpg")'
  },

  '@media(max-width: 700px)': {
    backgroundImage: 'url("../static/images/hero-mobile@2.jpg")',
    backgroundPostion: 'center 65%'
  }
});

export const Content = styled.div({
  height: '100%'
});

export const Title = styled.div({
  position: 'absolute',
  left: 0,
  top: '10%',
  width: '100%'
});

export const H1 = styled.h1({
  color: '#333',
  fontSize: 50,
  textAlign: 'center',
  margin: '10px 0 0 0'
});

export const H3 = styled.h3({
  color: '#333',
  fontWeight: 300,
  textAlign: 'center',
  fontSize: 23,
  margin: '4px 0 0'
});

export const P = styled.p({
  width: 380,
  lineHeight: '24px',
  fontSize: 16,
  textAlign: 'center',
  margin: '10px 0 0 0'
});

export const Copy = styled.div({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: '85%',
  width: '100%',
  marginTop: -60
});

export const Stats = styled.div({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: '85%',
  width: '100%',
  marginTop: 20
});

export const Info = styled.div({
  width: 198,
  height: 52,
  float: 'left',
  borderRight: '1px solid rgba(255,255,255,0.4)'
});

export const Top = styled.h4({
  margin: 0,
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 500
});

export const Bottom = styled.p({
  textAlign: 'center',
  fontSize: 13,
  margin: 0
});
