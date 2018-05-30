import { Main, Image, Links, Others } from './styles';

const Navigation = () => (
  <Main>
    <Image
      src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
      alt="tesla logo png"
    />

    <Links>
      <li>Model S</li>
      <li>Model X</li>
      <li>Model 3</li>
      <li>Roadster</li>
      <li>Energy</li>
    </Links>
    <Others>
      <li>Shop</li>
      <li>Sign in</li>
    </Others>
  </Main>
);
export default Navigation;
