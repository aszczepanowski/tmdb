import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import type { LayoutDefaultProps } from './types';

function LayoutDefault({
  children,
  title,
  description
}: LayoutDefaultProps): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Heading title={title} description={description} />
      <main className="flex-grow bg-zinc-100">{children}</main>
      <Footer />
    </div>
  );
}

export default LayoutDefault;
