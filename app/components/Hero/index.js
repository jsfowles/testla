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
  Speedo,
  Data,
  DataContainer,
  ButtonContainer
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
      <DataContainer>
        <Info>
          <Speedo dangerouslySetInnerHTML={{ __html: speedo }} />
          <Data>
            <Top>
              1.9<span>s</span>
            </Top>
            <Bottom>0-60mph</Bottom>
          </Data>
        </Info>
        <Info>
          <Data>
            <Top>
              +250<span>mph</span>
            </Top>
            <Bottom>Top Speed</Bottom>
          </Data>
        </Info>
        <Info>
          <Data>
            <Top>
              620<span>mi</span>
            </Top>
            <Bottom>Mile Range</Bottom>
          </Data>
        </Info>
      </DataContainer>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </Stats>
  </Main>
);
export default Hero;
