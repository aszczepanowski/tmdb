import clsx from 'clsx';
import { InformationCircleIcon } from '@heroicons/react/outline';
import type { InfoScreenProps } from './types';

function InfoScreen({
  bg = 'light',
  title,
  description
}: InfoScreenProps): JSX.Element {
  return (
    <div className="block text-center">
      <InformationCircleIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
      <div
        className={clsx(
          bg === 'light' ? 'text-zinc-900' : 'text-white',
          'text-2xl font-bold mb-2'
        )}
      >
        {title}
      </div>
      <div className="text-md text-medium">{description}</div>
    </div>
  );
}

export default InfoScreen;
