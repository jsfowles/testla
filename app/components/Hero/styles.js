import styled, { keyframes, injectGlobal } from 'react-emotion';

export const Main = styled.div({
  height: '100%',
  width: '100%',
  position: 'relative'
});

export const Background = styled.img({
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
