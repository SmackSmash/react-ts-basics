import { type PropsWithChildren } from 'react';

interface HintBoxProps {
  mode: 'hint';
}

interface WarningBoxProps {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: PropsWithChildren<InfoBoxProps>) => {
  const { mode, children } = props;

  let infoBoxClasses =
    'border flex flex-col h-20 m-4 items-center justify-center';

  if (mode === 'hint') {
    infoBoxClasses += ' border-cyan-500 text-cyan-500';

    return (
      <aside className={infoBoxClasses}>
        <p>{children}</p>
      </aside>
    );
  }

  if (mode === 'warning') {
    const { severity } = props;

    switch (severity) {
      case 'low':
        infoBoxClasses += ' border-yellow-500 text-yellow-500';
        break;
      case 'medium':
      default:
        infoBoxClasses += ' border-orange-500 text-orange-500';
        break;
      case 'high':
        infoBoxClasses += ' border-red-500 text-red-500';
        break;
    }

    return (
      <aside className={infoBoxClasses}>
        <h2 className='font-bold text-2xl uppercase'>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
