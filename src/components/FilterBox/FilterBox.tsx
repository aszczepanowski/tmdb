import { Fragment, useMemo } from 'react';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import type { FilterBoxProps } from './types';

function FilterBox({
  name,
  options = [],
  selected,
  onChange
}: FilterBoxProps): JSX.Element {
  const label = useMemo(() => {
    if (!selected) {
      return name;
    }

    const selectedOption = options.find((o) => o.value === selected);

    return selectedOption?.label || name;
  }, [name, options, selected]);

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="group inline-flex text-sm font-medium text-zinc-700 hover:text-zinc-900">
        {({ open }) => (
          <>
            {label}
            <ChevronDownIcon
              className={clsx(
                'flex-shrink-0 -mr-1 ml-1 h-5 w-5',
                open
                  ? 'text-zinc-900'
                  : 'text-zinc-400 group-hover:text-zinc-900'
              )}
              aria-hidden="true"
            />
          </>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 absolute origin-top-left left-0 right-0 w-48 mt-2 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="max-h-72 overflow-y-auto py-2">
            {options.map((option) => (
              <Menu.Item key={option.value}>
                <button
                  className={clsx(
                    'w-full block text-sm text-left px-4 py-2',
                    option.value === selected
                      ? 'bg-zinc-100 text-zinc-900 font-medium'
                      : 'text-zinc-400'
                  )}
                  onClick={() => onChange(option)}
                >
                  {option.label}
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FilterBox;
