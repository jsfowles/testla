import Button from '../Button';
import speedo from '../../../static/images/speedo';
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
  Info,
  Speedo
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
        <Top>
          <Speedo dangerouslySetInnerHTML={{ __html: speedo }} />
          1.9<span>s</span>
        </Top>
        <Bottom>0-60mph</Bottom>
      </Info>
      <Info>
        <Top>
          +250<span>mph</span>
        </Top>
        <Bottom>Top Speed</Bottom>
      </Info>
      <Info>
        <Top>
          620<span>mi</span>
        </Top>
        <Bottom>Mile Range</Bottom>
      </Info>
      <Button />
    </Stats>
  </Main>
);
export default Hero;
