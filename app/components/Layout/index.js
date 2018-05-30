import Link from 'next/link';
import Head from 'next/head';
import { Main } from './styles';
import Navigation from '../Navigation';

const Layout = ({ children, title = 'Testla' }) => {
  return (
    <Main>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navigation />
      </header>

      {children}

      <footer />
    </Main>
  );
};

export default Layout;
