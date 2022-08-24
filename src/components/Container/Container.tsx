import type { ContainerProps } from './types';

function Container({ children }: ContainerProps): JSX.Element {
  return <div className="container lg:max-w-6xl px-4 mx-auto">{children}</div>;
}

export default Container;
