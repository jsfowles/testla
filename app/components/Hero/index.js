import {
  Main,
  Background,
  Content,
  Title,
  P,
  H1,
  H3,
  Copy,
  Stats,
  Top,
  Bottom,
  Info
} from './styles';

const Hero = () => (
  <Main>
    <Background />
    <Title>
      <H3>Tesla</H3>
      <H1>Roadster</H1>
    </Title>
    <Copy>
      <P>
        The quickest car in the world, with record-setting acceleration, range
        and performance
      </P>
    </Copy>
    <Stats>
      <Info>
        <Top>1.9s</Top>
        <Bottom>0-60pmh</Bottom>
      </Info>
      <Info>
        <Top>+250mph</Top>
        <Bottom>Top Speed</Bottom>
      </Info>
      <Info>
        <Top>620mi</Top>
        <Bottom>Mile Range</Bottom>
      </Info>
    </Stats>
  </Main>
);
export default Hero;
