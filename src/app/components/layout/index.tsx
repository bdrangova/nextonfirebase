import Header from './header';

interface LayoutProps {
  pathname: string;
  children: any;
}

const Layout = ({ pathname, children }: LayoutProps) => (
  <main>
    <Header pathname={pathname} />
    {children}
  </main>
);

export default Layout;
