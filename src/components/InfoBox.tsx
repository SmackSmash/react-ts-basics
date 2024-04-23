import { type PropsWithChildren } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
}

const InfoBox = ({ mode, children }: PropsWithChildren<InfoBoxProps>) => {
  if (mode === 'hint') {
    return (
      <aside className='border border-blue-500 text-blue-500 flex h-20 m-4 items-center justify-center'>
        <p>{children}</p>
      </aside>
    );
  }
  if (mode === 'warning') {
    return (
      <aside className='border border-orange-500 text-orange-500 flex h-20 m-4 items-center justify-center'>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
