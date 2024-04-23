import { type PropsWithChildren } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
}

const InfoBox = ({ mode, children }: PropsWithChildren<InfoBoxProps>) => {
  let infoBoxClasses =
    'border flex flex-col h-20 m-4 items-center justify-center';

  if (mode === 'hint') {
    infoBoxClasses += ' order-cyan-500 text-cyan-500';

    return (
      <aside className={infoBoxClasses}>
        <p>{children}</p>
      </aside>
    );
  }

  if (mode === 'warning') {
    infoBoxClasses += ' border-orange-500 text-orange-500';

    return (
      <aside className={infoBoxClasses}>
        <h2 className='font-bold text-2xl uppercase'>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
