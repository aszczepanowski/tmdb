import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { MENU_ITEMS } from './constants';

function NavbarMenu(): JSX.Element {
  const location = useLocation();

  const isActive = useCallback(
    (route: string) => {
      return route === location.pathname;
    },
    [location.pathname]
  );

  return (
    <nav className="ml-4 sm:ml-12">
      <div className="flex space-x-4 sm:space-x-8">
        {MENU_ITEMS.map((item) => {
          const active = isActive(item.route);

          return (
            <Link
              key={item.name}
              to={item.route}
              className={clsx(
                'relative flex items-center h-14 sm:h-16 px-1 text-sm font-medium',
                active ? 'text-white' : 'text-zinc-400 hover:text-white'
              )}
              aria-current={active ? 'page' : undefined}
            >
              {item.name}
              {active && (
                <div className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-amber-300" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavbarMenu;
