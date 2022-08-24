import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Container from 'components/Container';
import InfoScreen from 'components/InfoScreen';
import type { LayoutErrorProps } from './types';

function LayoutError({
  title,
  description,
  cta
}: LayoutErrorProps): JSX.Element {
  return (
    <div className="flex items-center min-h-screen bg-zinc-900 text-zinc-400 text-center py-16">
      <Container>
        <InfoScreen bg="dark" title={title} description={description} />
        {cta && (
          <Link
            to={cta.route}
            className="inline-flex items-center text-md text-amber-300 font-medium rounded-md py-3 px-4 mt-4 hover:bg-zinc-800"
          >
            {cta.title}
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        )}
      </Container>
    </div>
  );
}

export default LayoutError;
