import Container from 'components/Container';
import type { HeadingProps } from './types';

function Heading({ title, description }: HeadingProps): JSX.Element {
  return (
    <div className="bg-zinc-900 text-white py-8 sm:py-10 lg:py-12">
      <Container>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className="text-zinc-400 font-medium mt-2">{description}</p>
      </Container>
    </div>
  );
}

export default Heading;
