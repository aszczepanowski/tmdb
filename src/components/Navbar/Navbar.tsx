import Container from 'components/Container';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';
import NavbarGit from './NavbarGit';

function Navbar(): JSX.Element {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 text-white">
      <Container>
        <div className="relative flex items-center h-14 sm:h-16">
          <div className="flex-1 flex items-center">
            <NavbarBrand />
            <NavbarMenu />
          </div>
          <div className="flex-shrink-0 hidden sm:block ml-2">
            <NavbarGit />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
