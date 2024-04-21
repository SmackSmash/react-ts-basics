import { type PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header className='w-full h-24 flex justify-between items-center px-4 shadow-md bg-slate-200'>
      <img className='max-h-full py-4' {...image} />
      {children}
    </header>
  );
};

export default Header;
