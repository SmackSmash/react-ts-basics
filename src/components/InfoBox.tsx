import { type PropsWithChildren } from 'react';

interface InfoBoxProps {}

const InfoBox = ({ children }: PropsWithChildren<InfoBoxProps>) => {
  return (
    <aside>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
