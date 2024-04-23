import { type PropsWithChildren } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
}

const InfoBox = ({ mode, children }: PropsWithChildren<InfoBoxProps>) => {
  const infoBoxClasses =
    'border flex flex-col h-20 m-4 items-center justify-center';

  if (mode === 'hint') {
    return (
      <aside className={`${infoBoxClasses} border-cyan-500 text-cyan-500`}>
        <p>{children}</p>
      </aside>
    );
  }

  if (mode === 'warning') {
    return (
      <aside className={`${infoBoxClasses} border-orange-500 text-orange-500`}>
        <h2 className='font-bold text-2xl uppercase'>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
