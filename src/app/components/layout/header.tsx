import Link from 'next/link';

interface HeaderProps {
  pathname: string;
}

const Header = ({ pathname }: HeaderProps) => (
  <header>
    <Link href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>{' '}
    <Link href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
);

export default Header;
