import { PlayIcon } from '@heroicons/react/solid';

function NavbarBrand(): JSX.Element {
  return (
    <div className="flex items-center select-none">
      <PlayIcon className="w-9 h-9 text-amber-300" />
      <div className="text-xl font-bold hidden sm:block ml-2">TMDB</div>
    </div>
  );
}

export default NavbarBrand;
