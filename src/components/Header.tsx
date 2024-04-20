interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
}

const Header = ({ image: { src, alt } }: HeaderProps) => {
  return (
    <header className='w-full h-24 bg-slate-200'>
      <img className='max-h-full p-4' src={src} alt={alt} />
    </header>
  );
};

export default Header;
