import Link from 'next/link';
import PropTypes from 'prop-types';
import '../styles/index.css';

const Header = ({ pathname }) => (
  <header>
    <Link href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>{' '}
    <Link href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
);

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
